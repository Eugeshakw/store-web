import { HeaderContainer } from "./styleHeader.style.js";
import { Logo } from "./../../common/logo/Logo";
import { CatalogIcon } from "../../common/icons/CatalogIcon";
import { SearchBar } from '../../common/icons/SearchBar';
import {ReactComponent as CompareIcon} from '../../common/icons/CompareIcon.svg'
import {ReactComponent as FavoriteIcon } from "../../common/icons/FavoriteIcon.svg";
import {ReactComponent as Shape} from "../../common/icons/Shape.svg";
export const Header = () => {
  return (
    <>
      <div className="container">
        <HeaderContainer>
          <Logo />
          <div className="con-catalog">
            <button type="button" className="btn-Catalog">
              Catalog <CatalogIcon />
            </button>
          </div>
          <div className="con-search-block">
            <form type='submit'>
              
              <input
                type="text"
                className="search-input"
                placeholder="search"
                 
              />
              <button type="submit" className="btnSumbit"><SearchBar/></button>
            </form>
          </div>
          <div className="con-iconlist">
            <ul className="list-btn-icon">
              <li><button type="button" className="btn-compare"><CompareIcon/></button></li>
              <li><button type="button" className="btn-favorite"><FavoriteIcon/></button></li>
              <li><button type="button" className="btn-shop"><Shape/></button></li>
            </ul>
          </div>
        </HeaderContainer>
      </div>
    </>
  );
};
