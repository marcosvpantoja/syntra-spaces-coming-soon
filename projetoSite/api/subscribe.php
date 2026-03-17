<?php
// api/subscribe.php
// Recebe o email via POST e salva em emails.txt + envia email de notificação

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$email = isset($data['email']) ? trim($data['email']) : '';

if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}

// 1. Salva em arquivo (crie a pasta data/ com permissão de escrita)
$file = __DIR__ . '/../data/emails.txt';
$dir = dirname($file);
if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}
file_put_contents($file, $email . ' | ' . date('Y-m-d H:i:s') . PHP_EOL, FILE_APPEND | LOCK_EX);

// 2. (Opcional) Envia email de notificação ao admin
$adminEmail = 'admin@syntra.com.br'; // ← altere para seu email
$subject = 'Novo cadastro - Syntra Spaces';
$message = "Novo email cadastrado na lista de espera:\n\n$email\n\nData: " . date('d/m/Y H:i:s');
$headers = "From: noreply@syntra.com.br\r\nReply-To: $email";

@mail($adminEmail, $subject, $message, $headers);

http_response_code(200);
echo json_encode(['success' => true, 'email' => $email]);
