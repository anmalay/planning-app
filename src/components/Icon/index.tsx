import React, { memo } from 'react';
import { IconName } from 'src/components/Icon/types';
import { CSSColors } from 'src/types';

import AddIcon from './assets/Add.svg';
import ArrowLeftIcon from './assets/Arrow_left.svg';
import ArrowRightIcon from './assets/Arrow_right.svg';
import AttachIcon from './assets/Attach.svg';
import AttentionIcon from './assets/Attention.svg';
import AvailableIcon from './assets/Available.svg';
import AwaitingIcon from './assets/Awaiting.svg';
import BlueFb from './assets/BlueFb.svg';
import BlueInst from './assets/BlueInst.svg';
import BlueVk from './assets/BlueVk.svg';
import BlueYt from './assets/BlueYt.svg';
import CalendarIcon from './assets/Calendar.svg';
import CheckMark from './assets/checkMark.svg';
import ChevronDownIcon from './assets/Chevron_down.svg';
import ChevronLeftIcon from './assets/Chevron_Left.svg';
import ChevronRightIcon from './assets/Chevron_Right.svg';
import ChevronUpIcon from './assets/Chevron_up.svg';
import ClapIcon from './assets/Clap.svg';
import ClockIcon from './assets/Clock.svg';
import CloseIcon from './assets/Close.svg';
import CopyIcon from './assets/Copy.svg';
import EuFlag from './assets/EuFlag.svg';
import ExitIcon from './assets/Exit.svg';
import EyeOffIcon from './assets/eye_off.svg';
import EyeOnIcon from './assets/eye_on.svg';
import FavoriteIcon from './assets/Favorite.svg';
import FavoriteStoreIcon from './assets/Favorite_store.svg';
import Facebook from './assets/fb.svg';
import FeedbackIcon from './assets/Feedback.svg';
import Google from './assets/google.svg';
import HistoryIcon from './assets/History.svg';
import InformatiobIcon from './assets/Informatiob.svg';
import Instagram from './assets/inst.svg';
import MC from './assets/MC.svg';
import MenuIcon from './assets/Menu.svg';
import Menu1Icon from './assets/Menu-1.svg';
import Mir from './assets/Mir.svg';
import NotificationDefaultIcon from './assets/Notification_defailt.svg';
import NotificationIndicationIcon from './assets/Notification_indication.svg';
import PlusIcon from './assets/Plus.svg';
import ProfileIcon from './assets/Profile.svg';
import PromocodeIcon from './assets/Promocode.svg';
import QuestionIcon from './assets/Question.svg';
import RejectedIcon from './assets/Rejected.svg';
import RenewIcon from './assets/Renew.svg';
import RuFlag from './assets/RuFlag.svg';
import SearchIcon from './assets/Search.svg';
import SettingsIcon from './assets/Settings.svg';
import SupportIcon from './assets/Support.svg';
import TrashIcon from './assets/Trash.svg';
import UaFlag from './assets/UaFlag.svg';
import UsFlag from './assets/UsFlag.svg';
import Visa from './assets/Visa.svg';
import Vkontakte from './assets/vk.svg';
import WalletIcon from './assets/Wallet.svg';
import WithdrawalIcon from './assets/Withdrawal.svg';
import Youtube from './assets/yt.svg';

/**
 * @param {name} Название
 * @param {size} Размер в пикселях
 * @param {isQuadrant} Квадратная ли иконка; если нет, то параметр `size` будет отвечать только за высоту иконки
 */
export type IconProps = {
  name: IconName;
  size?: number;
  color?: CSSColors;
  isQuadrant?: boolean;
  className?: string;
  customWidth?: number;
  customHeight?: number;
};

export const Icon = memo(
  ({
    name,
    size = 12,
    customWidth,
    customHeight,
    color = CSSColors.iconsDark,
    isQuadrant = !customWidth,
    className,
  }: IconProps): JSX.Element | null => {
    const svgProps = {
      color,
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    };

    const getIcon = () => {
      switch (name) {
        case 'Add':
          return <AddIcon {...svgProps} />;

        case 'ArrowLeft':
          return <ArrowLeftIcon {...svgProps} />;

        case 'ArrowRight':
          return <ArrowRightIcon {...svgProps} />;

        case 'Attach':
          return <AttachIcon {...svgProps} />;

        case 'Attention':
          return <AttentionIcon {...svgProps} />;

        case 'Available':
          return <AvailableIcon {...svgProps} />;

        case 'Awaiting':
          return <AwaitingIcon {...svgProps} />;

        case 'Calendar':
          return <CalendarIcon {...svgProps} />;

        case 'ChevronLeft':
          return <ChevronLeftIcon {...svgProps} />;

        case 'ChevronRight':
          return <ChevronRightIcon {...svgProps} />;

        case 'ChevronDown':
          return <ChevronDownIcon {...svgProps} />;

        case 'ChevronUp':
          return <ChevronUpIcon {...svgProps} />;

        case 'Clock':
          return <ClockIcon {...svgProps} />;

        case 'Close':
          return <CloseIcon {...svgProps} />;

        case 'Copy':
          return <CopyIcon {...svgProps} />;

        case 'Exit':
          return <ExitIcon {...svgProps} />;

        case 'Favorite':
          return <FavoriteIcon {...svgProps} />;

        case 'FavoriteStore':
          return <FavoriteStoreIcon {...svgProps} />;

        case 'Feedback':
          return <FeedbackIcon {...svgProps} />;

        case 'History':
          return <HistoryIcon {...svgProps} />;

        case 'Information':
          return <InformatiobIcon {...svgProps} />;

        case 'MenuBlocks':
          return <Menu1Icon {...svgProps} />;

        case 'Menu':
          return <MenuIcon {...svgProps} />;

        case 'Notification':
          return <NotificationDefaultIcon {...svgProps} />;

        case 'NotificationOn':
          return <NotificationIndicationIcon {...svgProps} />;

        case 'Plus':
          return <PlusIcon {...svgProps} />;

        case 'Profile':
          return <ProfileIcon {...svgProps} />;

        case 'Promocode':
          return <PromocodeIcon {...svgProps} />;

        case 'Question':
          return <QuestionIcon {...svgProps} />;

        case 'Rejected':
          return <RejectedIcon {...svgProps} />;

        case 'Renew':
          return <RenewIcon {...svgProps} />;

        case 'Search':
          return <SearchIcon {...svgProps} />;

        case 'Settings':
          return <SettingsIcon {...svgProps} />;

        case 'Support':
          return <SupportIcon {...svgProps} />;

        case 'Trash':
          return <TrashIcon {...svgProps} />;

        case 'Wallet':
          return <WalletIcon {...svgProps} />;

        case 'Withdrawal':
          return <WithdrawalIcon {...svgProps} />;

        case 'EyeOff':
          return <EyeOffIcon {...svgProps} />;

        case 'EyeOn':
          return <EyeOnIcon {...svgProps} />;

        case 'Clap':
          return <ClapIcon {...svgProps} />;

        case 'RuFlag':
          return <RuFlag {...svgProps} />;

        case 'UaFlag':
          return <UaFlag {...svgProps} />;

        case 'UsFlag':
          return <UsFlag {...svgProps} />;

        case 'EuFlag':
          return <EuFlag {...svgProps} />;

        case 'CheckMark':
          return <CheckMark {...svgProps} />;

        case 'Instagram':
          return <Instagram {...svgProps} />;

        case 'Youtube':
          return <Youtube {...svgProps} />;

        case 'Facebook':
          return <Facebook {...svgProps} />;

        case 'Vkontakte':
          return <Vkontakte {...svgProps} />;

        case 'BlueInst':
          return <BlueInst {...svgProps} />;

        case 'BlueYt':
          return <BlueYt {...svgProps} />;

        case 'BlueFb':
          return <BlueFb {...svgProps} />;

        case 'BlueVk':
          return <BlueVk {...svgProps} />;

        case 'Google':
          return <Google {...svgProps} />;

        case 'Visa':
          return <Visa {...svgProps} />;

        case 'MC':
          return <MC {...svgProps} />;

        case 'Mir':
          return <Mir {...svgProps} />;

        default:
          return null;
      }
    };

    return (
      <div
        className={className}
        style={{
          minWidth: isQuadrant ? `${size}px` : `${customWidth || 'auto'}px`,
          minHeight: `${customHeight || size}px`,
          position: 'relative',
        }}
      >
        {getIcon()}
      </div>
    );
  },
);
