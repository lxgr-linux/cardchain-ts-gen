import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "../types/cardchain/cardchain/tx";
import { MsgUserCreate } from "../types/cardchain/cardchain/tx";
import { MsgCardSchemeBuy } from "../types/cardchain/cardchain/tx";
import { MsgCardSaveContent } from "../types/cardchain/cardchain/tx";
import { MsgCardVote } from "../types/cardchain/cardchain/tx";
import { MsgCardTransfer } from "../types/cardchain/cardchain/tx";
import { MsgCardDonate } from "../types/cardchain/cardchain/tx";
import { MsgCardArtworkAdd } from "../types/cardchain/cardchain/tx";
import { MsgCardArtistChange } from "../types/cardchain/cardchain/tx";
import { MsgCouncilRegister } from "../types/cardchain/cardchain/tx";
import { MsgCouncilDeregister } from "../types/cardchain/cardchain/tx";
import { MsgMatchReport } from "../types/cardchain/cardchain/tx";
import { MsgCouncilCreate } from "../types/cardchain/cardchain/tx";
import { MsgMatchReporterAppoint } from "../types/cardchain/cardchain/tx";
import { MsgSetCreate } from "../types/cardchain/cardchain/tx";
import { MsgSetCardAdd } from "../types/cardchain/cardchain/tx";
import { MsgSetCardRemove } from "../types/cardchain/cardchain/tx";
import { MsgSetContributorAdd } from "../types/cardchain/cardchain/tx";
import { MsgSetContributorRemove } from "../types/cardchain/cardchain/tx";
import { MsgSetFinalize } from "../types/cardchain/cardchain/tx";
import { MsgSetArtworkAdd } from "../types/cardchain/cardchain/tx";
import { MsgSetStoryAdd } from "../types/cardchain/cardchain/tx";
import { MsgBoosterPackBuy } from "../types/cardchain/cardchain/tx";
import { MsgSellOfferCreate } from "../types/cardchain/cardchain/tx";
import { MsgSellOfferBuy } from "../types/cardchain/cardchain/tx";
import { MsgSellOfferRemove } from "../types/cardchain/cardchain/tx";
import { MsgCardRaritySet } from "../types/cardchain/cardchain/tx";
import { MsgCouncilResponseCommit } from "../types/cardchain/cardchain/tx";
import { MsgCouncilResponseReveal } from "../types/cardchain/cardchain/tx";
import { MsgCouncilRestart } from "../types/cardchain/cardchain/tx";
import { MsgMatchConfirm } from "../types/cardchain/cardchain/tx";
import { MsgProfileCardSet } from "../types/cardchain/cardchain/tx";
import { MsgProfileWebsiteSet } from "../types/cardchain/cardchain/tx";
import { MsgProfileBioSet } from "../types/cardchain/cardchain/tx";
import { MsgBoosterPackOpen } from "../types/cardchain/cardchain/tx";
import { MsgBoosterPackTransfer } from "../types/cardchain/cardchain/tx";
import { MsgSetStoryWriterSet } from "../types/cardchain/cardchain/tx";
import { MsgSetArtistSet } from "../types/cardchain/cardchain/tx";
import { MsgCardVoteMulti } from "../types/cardchain/cardchain/tx";
import { MsgMatchOpen } from "../types/cardchain/cardchain/tx";
import { MsgSetNameSet } from "../types/cardchain/cardchain/tx";
import { MsgProfileAliasSet } from "../types/cardchain/cardchain/tx";
import { MsgEarlyAccessInvite } from "../types/cardchain/cardchain/tx";
import { MsgZealyConnect } from "../types/cardchain/cardchain/tx";
import { MsgEncounterCreate } from "../types/cardchain/cardchain/tx";
import { MsgEncounterEdit } from "../types/cardchain/cardchain/tx";
import { MsgEncounterDo } from "../types/cardchain/cardchain/tx";
import { MsgEncounterClose } from "../types/cardchain/cardchain/tx";
import { MsgEncounterDelete } from "../types/cardchain/cardchain/tx";
import { MsgEarlyAccessDisinvite } from "../types/cardchain/cardchain/tx";
import { MsgCardBan } from "../types/cardchain/cardchain/tx";
import { MsgEarlyAccessGrant } from "../types/cardchain/cardchain/tx";
import { MsgSetActivate } from "../types/cardchain/cardchain/tx";
import { MsgCardCopyrightClaim } from "../types/cardchain/cardchain/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cardchain.cardchain.MsgUpdateParams", MsgUpdateParams],
    ["/cardchain.cardchain.MsgUserCreate", MsgUserCreate],
    ["/cardchain.cardchain.MsgCardSchemeBuy", MsgCardSchemeBuy],
    ["/cardchain.cardchain.MsgCardSaveContent", MsgCardSaveContent],
    ["/cardchain.cardchain.MsgCardVote", MsgCardVote],
    ["/cardchain.cardchain.MsgCardTransfer", MsgCardTransfer],
    ["/cardchain.cardchain.MsgCardDonate", MsgCardDonate],
    ["/cardchain.cardchain.MsgCardArtworkAdd", MsgCardArtworkAdd],
    ["/cardchain.cardchain.MsgCardArtistChange", MsgCardArtistChange],
    ["/cardchain.cardchain.MsgCouncilRegister", MsgCouncilRegister],
    ["/cardchain.cardchain.MsgCouncilDeregister", MsgCouncilDeregister],
    ["/cardchain.cardchain.MsgMatchReport", MsgMatchReport],
    ["/cardchain.cardchain.MsgCouncilCreate", MsgCouncilCreate],
    ["/cardchain.cardchain.MsgMatchReporterAppoint", MsgMatchReporterAppoint],
    ["/cardchain.cardchain.MsgSetCreate", MsgSetCreate],
    ["/cardchain.cardchain.MsgSetCardAdd", MsgSetCardAdd],
    ["/cardchain.cardchain.MsgSetCardRemove", MsgSetCardRemove],
    ["/cardchain.cardchain.MsgSetContributorAdd", MsgSetContributorAdd],
    ["/cardchain.cardchain.MsgSetContributorRemove", MsgSetContributorRemove],
    ["/cardchain.cardchain.MsgSetFinalize", MsgSetFinalize],
    ["/cardchain.cardchain.MsgSetArtworkAdd", MsgSetArtworkAdd],
    ["/cardchain.cardchain.MsgSetStoryAdd", MsgSetStoryAdd],
    ["/cardchain.cardchain.MsgBoosterPackBuy", MsgBoosterPackBuy],
    ["/cardchain.cardchain.MsgSellOfferCreate", MsgSellOfferCreate],
    ["/cardchain.cardchain.MsgSellOfferBuy", MsgSellOfferBuy],
    ["/cardchain.cardchain.MsgSellOfferRemove", MsgSellOfferRemove],
    ["/cardchain.cardchain.MsgCardRaritySet", MsgCardRaritySet],
    ["/cardchain.cardchain.MsgCouncilResponseCommit", MsgCouncilResponseCommit],
    ["/cardchain.cardchain.MsgCouncilResponseReveal", MsgCouncilResponseReveal],
    ["/cardchain.cardchain.MsgCouncilRestart", MsgCouncilRestart],
    ["/cardchain.cardchain.MsgMatchConfirm", MsgMatchConfirm],
    ["/cardchain.cardchain.MsgProfileCardSet", MsgProfileCardSet],
    ["/cardchain.cardchain.MsgProfileWebsiteSet", MsgProfileWebsiteSet],
    ["/cardchain.cardchain.MsgProfileBioSet", MsgProfileBioSet],
    ["/cardchain.cardchain.MsgBoosterPackOpen", MsgBoosterPackOpen],
    ["/cardchain.cardchain.MsgBoosterPackTransfer", MsgBoosterPackTransfer],
    ["/cardchain.cardchain.MsgSetStoryWriterSet", MsgSetStoryWriterSet],
    ["/cardchain.cardchain.MsgSetArtistSet", MsgSetArtistSet],
    ["/cardchain.cardchain.MsgCardVoteMulti", MsgCardVoteMulti],
    ["/cardchain.cardchain.MsgMatchOpen", MsgMatchOpen],
    ["/cardchain.cardchain.MsgSetNameSet", MsgSetNameSet],
    ["/cardchain.cardchain.MsgProfileAliasSet", MsgProfileAliasSet],
    ["/cardchain.cardchain.MsgEarlyAccessInvite", MsgEarlyAccessInvite],
    ["/cardchain.cardchain.MsgZealyConnect", MsgZealyConnect],
    ["/cardchain.cardchain.MsgEncounterCreate", MsgEncounterCreate],
    ["/cardchain.cardchain.MsgEncounterEdit", MsgEncounterEdit],
    ["/cardchain.cardchain.MsgEncounterDo", MsgEncounterDo],
    ["/cardchain.cardchain.MsgEncounterClose", MsgEncounterClose],
    ["/cardchain.cardchain.MsgEncounterDelete", MsgEncounterDelete],
    ["/cardchain.cardchain.MsgEarlyAccessDisinvite", MsgEarlyAccessDisinvite],
    ["/cardchain.cardchain.MsgCardBan", MsgCardBan],
    ["/cardchain.cardchain.MsgEarlyAccessGrant", MsgEarlyAccessGrant],
    ["/cardchain.cardchain.MsgSetActivate", MsgSetActivate],
    ["/cardchain.cardchain.MsgCardCopyrightClaim", MsgCardCopyrightClaim],
    
];

export { msgTypes }