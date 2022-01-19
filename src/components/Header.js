import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <HeaderItem>
        <i className='fas fa-bars'></i>
      </HeaderItem>

      <HeaderItem>
        <i className='fas fa-border-all'></i>
        <span>Dashboard</span>
      </HeaderItem>

      <HeaderItem>
        <i className='fas fa-images'></i>
        <span>Collections</span>
      </HeaderItem>

      <Placeholder />

      <HeaderItem>
        <Profile>
          <img
            src='https://avatars.githubusercontent.com/u/61084415?v=4'
            alt=''
          />
        </Profile>
      </HeaderItem>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  background-color: #20212d;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;
`

const HeaderItem = styled.div`
  padding: 10px 16px;
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight: 500;
  }

  &:hover {
    background-color: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`

const Placeholder = styled.div`
  flex: 1;
`

const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 30px;
    border-radius: 50%;
  }
`
