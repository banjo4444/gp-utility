import {GangsterResult} from "./gangster-result.model";

export class AttackResult {
    totalCost?: number;
    totalCostPretty?: number;
    specialists?: GangsterResult;
    hitMen?: GangsterResult;
    thugs?: GangsterResult;
}
