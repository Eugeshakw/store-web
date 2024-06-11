import styled from 'styled-components';



export const HeaderContainer = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;


  .btn-Catalog{
    border-radius: 4px;
    padding: 10px 15px;
    color: ${p => p.theme.colors.soft};
    background-color: ${p => p.theme.colors.actionPrimary };
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

  }
  .con-catalog{
    margin-left: 30px;
  }
  .con-search-block{
    margin-left: auto;
  }


  .search-input{
    border: 1px solid ${p => p.theme.colors.grayScale10};
    border-radius: 4px;
    padding: 0px 0px 0px 12px;
    width: 758px;
    height: 42px;
    outline: none;
    /* color: ${p => p.theme.colors.grayScale10} */
    background-color: ${p => p.theme.colors.white};
  }
  form {
    position: relative;

  }
  .btnSumbit{
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 4px 4px 0;
    padding: 9px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${p => p.theme.colors.actionSecondary};
  }
  .btn-compare{
    background: inherit;

  }
  .btn-favorite{
    background: inherit;
  }
  .btn-shop{
    background: inherit;
  }
  .con-iconlist{
    margin-left: auto;

  }

  .list-btn-icon{
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 15px;
    
  }

`;

