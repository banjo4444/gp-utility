import {Constants} from "./constants";

import {AttackResult} from "../types/attack-result.model";
import {StealResult} from "../types/steal-result.model";

export function calculateAttack(targetRep: number | string): AttackResult {
    let targetRepNumber: number;

    if (!isNaN(Number(targetRep))) {
        targetRepNumber = Number(targetRep);
    } else {
        targetRepNumber = convertRepVariantToNumber(String(targetRep));
    }

    const desiredRep: number = targetRepNumber * 2;

    const specCount: number = Math.round((desiredRep / 3.3) / 360);
    const hitManCount: number = Math.round(specCount * 1.65);
    const thugCount: number = Math.round(hitManCount * 2.2);

    const specCost: number = specCount * Constants.SPECIALIST_COST;
    const hitManCost: number = hitManCount * Constants.HIT_MAN_COST;
    const thugCost: number = thugCount * Constants.THUG_COST;

    const totalCost: number = specCost + hitManCost + thugCost;

    const attackResult: AttackResult = prettify<AttackResult>({
        specialists: {amount: specCount, cost: specCost},
        hitMen: {amount: hitManCount, cost: hitManCost},
        thugs: {amount: thugCount, cost: thugCost},
        totalCost
    });

    return attackResult;
}

export function convertRepVariantToNumber(targetRep: string): number {
    let multiplier: number = 0;

    if (targetRep.endsWith("k") || targetRep.endsWith("K")) {
        multiplier = 1000;
    } else if (targetRep.endsWith("m") || targetRep.endsWith("M")) {
        multiplier = 1000000;
    } else if (targetRep.endsWith("b") || targetRep.endsWith("B")) {
        multiplier = 1000000000;
    }

    const targetRepNoLetter: string = targetRep.slice(0, targetRep.length - 1);

    return Number(targetRepNoLetter) * multiplier;
}

export function calculateSteal(maxRep: number | string): StealResult {
    let maxRepNumber: number;

    if (!isNaN(Number(maxRep))) {
        maxRepNumber = Number(maxRep);
    } else {
        maxRepNumber = convertRepVariantToNumber(String(maxRep));
    }

    const desiredRep: number = maxRepNumber * 2;

    const money: number = desiredRep * Constants.CASH_EQUIVALENT_OF_ONE_REP;

    return prettify<StealResult>({money});
}

export function calculateTrain(labCount: number, multiHitters: number): number {
    // each lab has 100% 'health' if undamaged.
    const labHealth: number = labCount * 100;

    // each attacker who has multiple labs can deal up to 45% (15% per hit, assuming max) damage.
    const multiHitDamage: number = multiHitters * 45;

    const healthAfterMultiDamage: number = labHealth - multiHitDamage;

    let requiredAttackers: number = multiHitters;

    const numberOfSinglesNeeded: number = healthAfterMultiDamage / 36;

    if (numberOfSinglesNeeded > 1) {
        // should not need to wrap in Number(). requiredAttackers is a string without the Number wrap.
        requiredAttackers = Number(multiHitters) + Number(numberOfSinglesNeeded);
    }

    return Math.ceil(requiredAttackers);
}

export function prettify<T>(object: any): T {
    Object.keys(object).forEach((key: string) => {
        const value: any = object[key];

        if (typeof value === "object") {
            prettify(value);
        }

        if (typeof value === "number") {
            object[key + 'Pretty'] = value.toLocaleString();
        }
    });

    return object;
}
