# Syntra Spaces — Coming Soon (Standalone)

Página estática de pré-lançamento pronta para deploy em servidor KVM com Apache/Nginx + PHP.

## Estrutura

```
projetoSite/
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # Lógica do formulário
├── syntra-logo.png     # Logo (copie do projeto)
├── api/
│   └── subscribe.php   # Backend para salvar emails
├── data/
│   └── emails.txt      # Emails cadastrados (criado automaticamente)
└── README.md
```

## Deploy

1. Copie toda a pasta para o servidor (ex: `/var/www/syntra`)
2. Copie o arquivo `syntra-logo.png` do projeto principal (`src/assets/syntra-logo.png`) para esta pasta
3. Configure o Apache/Nginx para servir a pasta
4. Garanta que o PHP está instalado (`php-fpm` ou `mod_php`)
5. Dê permissão de escrita na pasta `data/`: `chmod 755 data/`
6. Edite `api/subscribe.php` e altere `$adminEmail` para seu email real

### Nginx exemplo

```nginx
server {
    listen 80;
    server_name syntra.com.br;
    root /var/www/syntra;
    index index.html;

    location /api/ {
        try_files $uri $uri/ /api/subscribe.php;
        fastcgi_pass unix:/run/php/php-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

### Apache (.htaccess)

```apache
RewriteEngine On
RewriteRule ^api/subscribe$ api/subscribe.php [L]
```
