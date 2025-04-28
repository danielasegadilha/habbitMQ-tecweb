
import { IMessageBrokerAccess } from "../../providers/messager-broker-access";
import { ISendCreateUserDTO } from "./isend-create-user-dto.interface";

export class SendCreateUserApplication {
  constructor(private readonly messagerBroker: IMessageBrokerAccess) {}

    /**
    * Handle
    * @param userSend
    */
  async handle(userSend: ISendCreateUserDTO): Promise<{ code: number; response: any }> {
    console.log('[APPLICATION] Preparando para enviar usuário para RabbitMQ:', userSend);

    return await this.messagerBroker.sendRPC({
      queue: "user-create",
      message: userSend,
    });
  }
}
