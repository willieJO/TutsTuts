package br.com.edu.tutstuts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import br.com.edu.tutstuts.model.Mensagem;
import br.com.edu.tutstuts.service.MensagemService;

@Controller
public class WebSocketController {

    private final SimpMessagingTemplate messagingTemplate;
    @Autowired
    private MensagemService _mensagemService;
    public WebSocketController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/chat")
    public void processMessageFromClient(Mensagem mensagem) {
    	_mensagemService.EnviarMensagem(mensagem);
        String destino = "/topic/user/" + mensagem.getId_usuario_destino();
        messagingTemplate.convertAndSend(destino, mensagem);
    }
}
