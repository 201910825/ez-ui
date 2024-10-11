export { ThemeProvider } from '../components/theme-provider';

export type { BtnProps } from '../components/Button';
export { Btn, buttonVariants } from '../components/Button';

export type { 
  ModalProps, 
  ModalTriggerProps, 
  ModalContentProps, 
  ModalHeaderProps, 
  ModalFooterProps, 
  ModalButtonProps
} from '../components/Modal';
export { 
  Modal, 
  ModalTrigger, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalCancel, 
  ModalAction 
} from '../components/Modal';

export type { 
  AlertModalProps, 
  AlertModalHeaderProps, 
  AlertModalFooterProps, 
  AlertModalButtonProps
} from '../components/AlertModal';
export {
  AlertModal,
  AlertModalHeader, 
  AlertModalFooter, 
  AlertModalCancel, 
  AlertModalAction 
} from '../components/AlertModal'

export { default as ToggleDark } from '../components/Darkmode';

export type { ConfirmProviderProps } from '../components/Confirm';
export { ConfirmProvider, useConfirm } from '../components/Confirm';

export type { ScreenProps } from '../components/VirtualPhone';
export { default as VirtualPhone } from '../components/VirtualPhone';

export type { Task, GanttChartProps, ButtonProps } from '../components/gantt';
export { GanttChartHeader, GanttChartBody ,GanttChartFooter , GanttChartProvider } from '../components/gantt';

export type { AvatarProps } from '../components/Avatar';
export { default as Avatar } from '../components/Avatar';

export type { ScrollAreaProps } from '../components/ScrollArea';
export { default as ScrollArea } from '../components/ScrollArea'

export type { CustomCalendarProps } from '../components/Calendar'
export { default as Calendar } from '../components/Calendar'

export type { LinkProps, LinkContentProps } from '../components/LinkItem'
export { default as LinkContent } from '../components/LinkItem'

export type { UseInfiniteScrollProps } from '../components/infinityScroll'
export { default as useInfiniteScroll } from '../components/infinityScroll'

export type { NavBarProps,NavItem } from '../components/NavBar';
export { default as NavBar } from '../components/NavBar';