import { FlowBuilderModel } from "../../models/FlowBuilder";
import { FlowCampaignModel } from "../../models/FlowCampaign";
import { WebhookModel } from "../../models/Webhook";
import { randomString } from "../../utils/randomCode";

interface Request {
  companyId: number;
  name: string;
  flowId: number;
  phrase:string
  id: number
  status: boolean
  whatsappId: number
}

const UpdateFlowCampaignService = async ({
  companyId,
  name,
  flowId,
  phrase,
  id,
  status,
  whatsappId
}: Request): Promise<String> => {
  try {

    const flow = await FlowCampaignModel.update({ name, phrase, flowId, status, whatsappId }, {
      where: {id: id}
    });

    return 'ok';
  } catch (error) {
    console.error("Erro ao inserir o usuário:", error);

    return error
  }
};

export default UpdateFlowCampaignService;
