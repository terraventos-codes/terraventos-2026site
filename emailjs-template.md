# Template HTML para EmailJS

Copie o código HTML abaixo e cole na aba de configuração do **Email Template** lá no painel do EmailJS. 

Lembre-se de ativar a configuração que envia o corpo do email como HTML e não texto puro.

```html
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #f9f9f9;">
  
  <!-- Header do Email -->
  <div style="background-color: #111827; padding: 30px; text-align: center;">
    <h1 style="color: #C4B096; margin: 0; font-size: 24px; font-weight: 500; letter-spacing: 2px;">TERRA VENTOS</h1>
    <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; opacity: 0.8;">Novo Contato Pelo Site</p>
  </div>
  
  <!-- Corpo do Email -->
  <div style="padding: 40px 30px; background-color: #ffffff;">
    <p style="font-size: 16px; color: #333333; margin-bottom: 25px;">Olá equipe Terra Ventos,</p>
    <p style="font-size: 15px; color: #555555; line-height: 1.6; margin-bottom: 30px;">Um novo contato foi recebido através do formulário do site. Abaixo estão os detalhes enviados pelo cliente/investidor:</p>
    
    <!-- Box com os Dados do Cliente -->
    <div style="background-color: #f4f6f8; padding: 25px; border-radius: 6px; border-left: 4px solid #C4B096;">
      
      <p style="margin: 0 0 15px 0; font-size: 15px; color: #222222;">
        <strong style="color: #777777; display: block; font-size: 12px; text-transform: uppercase; margin-bottom: 3px;">Nome</strong> 
        {{firstName}}
      </p>

      <p style="margin: 0 0 15px 0; font-size: 15px; color: #222222;">
        <strong style="color: #777777; display: block; font-size: 12px; text-transform: uppercase; margin-bottom: 3px;">Sobrenome</strong> 
        {{lastName}}
      </p>

      <p style="margin: 0 0 15px 0; font-size: 15px; color: #222222;">
        <strong style="color: #777777; display: block; font-size: 12px; text-transform: uppercase; margin-bottom: 3px;">E-mail</strong> 
        <a href="mailto:{{email}}" style="color: #111827; text-decoration: none; font-weight: 500;">{{email}}</a>
      </p>

      <p style="margin: 0 0 15px 0; font-size: 15px; color: #222222;">
        <strong style="color: #777777; display: block; font-size: 12px; text-transform: uppercase; margin-bottom: 3px;">Telefone</strong> 
        {{phone}}
      </p>

      <div style="margin: 0; font-size: 15px; color: #222222;">
        <strong style="color: #777777; display: block; font-size: 12px; text-transform: uppercase; margin-bottom: 5px;">Como podemos ajudar?</strong> 
        <div style="background: #ffffff; padding: 15px; border-radius: 4px; border: 1px solid #eeeeee; white-space: pre-wrap; color: #444444; font-style: italic;">
          {{message}}
        </div>
      </div>

    </div>
    
    <!-- Botão de Responder -->
    <div style="text-align: center; margin-top: 40px;">
      <a href="mailto:{{email}}?subject=Retorno%20Terra%20Ventos%20-%20Contato" style="display: inline-block; background-color: #C4B096; color: #111827; padding: 14px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; letter-spacing: 1px; font-size: 14px; text-transform: uppercase;">Responder ao Cliente</a>
    </div>
  </div>
  
  <!-- Footer do Email -->
  <div style="background-color: #f1f1f1; padding: 20px; text-align: center; font-size: 12px; color: #aaaaaa;">
    <p style="margin: 0;">Este email foi enviado automaticamente pelo sistema do site Terra Ventos (EmailJS).</p>
  </div>

</div>
```
