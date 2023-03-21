import useMediaQuery from "@hooks/useMediaQuery";
import { MobileNav } from "@componentsheader/Mobile";
import { Desktop } from '@componentsheader/Desktop'

const Header = (): JSX.Element => {

  const matches = useMediaQuery("(min-width: 480px)");

  const renderHeader = () => {

    return !matches ? <MobileNav /> : <Desktop />

  }

  return (
    renderHeader()
  )
}

export { Header }
