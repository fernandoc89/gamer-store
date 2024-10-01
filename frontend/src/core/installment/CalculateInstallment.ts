import { INTEREST_RATE_PER_MOUNTH, MAX_QUANTITY_INSTALLMENT } from "../constants";
import Installment from "./Installment";

export default class CalculateInstallment {
  execute(
    value: number,
    installmentsQuantity: number = MAX_QUANTITY_INSTALLMENT,
    interestRate: number = INTEREST_RATE_PER_MOUNTH,
  ): Installment {
    if (installmentsQuantity < 2 || installmentsQuantity > MAX_QUANTITY_INSTALLMENT) {
      throw new Error(`Quantidade de parcelas deve ser menor que ${MAX_QUANTITY_INSTALLMENT}`)
    }

    const totalWithInterest = this.calculateCompoundInterest(value, interestRate, installmentsQuantity);

    return {
      parcelValue: this.withTwoDecimalPlaces(totalWithInterest / installmentsQuantity),
      totalValue: this.withTwoDecimalPlaces(totalWithInterest),
      installmentsQuantity,
      interestRate
    }
  }

  private calculateCompoundInterest(totalValue: number, interestRate: number, installmentsQuantity: number): number {
    return totalValue * Math.pow(1 + interestRate, installmentsQuantity);
  }

  private withTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
