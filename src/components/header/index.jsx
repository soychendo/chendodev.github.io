import useMediaQuery from "../../../hooks/useMediaQuery";
import { MobileNav } from "./Mobile";
import { Desktop } from './Desktop'

const Header = () => {

  const matches = useMediaQuery("(min-width: 480px)");

  const renderHeader = () => {

    return !matches ? <MobileNav /> : <Desktop />

  }

  return (
    renderHeader()
  )
}

export { Header }
