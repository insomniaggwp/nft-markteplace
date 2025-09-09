import { FC } from 'react';
import { ReactComponent as UserIcon } from '../../public/icon_outline/user.svg';

type IconName = 'user' | 'wallet' | 'ranking';

type IconProps = {
  name: IconName;
  size?: number | string;
  color?: string;
};

const ICONS: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  user: UserIcon,
  // wallet: WalletIcon,
  // ranking: RankingIcon,
};

const Icon: FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => {
  const SvgIcon = ICONS[name];
  return <SvgIcon width={size} height={size} fill={color} />;
};

export default Icon;
