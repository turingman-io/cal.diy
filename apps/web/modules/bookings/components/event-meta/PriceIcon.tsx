import { SatSymbol } from "@calcom/ui/components/icon";
import { CreditCardIcon } from "@coss/ui/icons";

export function PriceIcon(props: { currency: string; className?: string }) {
  const { className, currency } = props;
  const Icon = currency === "BTC" ? SatSymbol : CreditCardIcon;
  return <Icon className={className} />;
}
