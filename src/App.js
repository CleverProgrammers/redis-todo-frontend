import styled from 'styled-components'
import Header from './components/Header'

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`
