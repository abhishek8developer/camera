import styled from 'styled-components'

export const Button: any = styled.button`
`
export const Span: any = styled.span`
`
export const Input: any = styled.input`
`
export const Flex: any = styled.div`
    display: flex;
    flex-direction: ${(props: any) => props.column ? 'column' : 'row'};
    flex-wrap: ${(props: any) => props.wrap ? 'wrap' : 'no-wrap'};
`

export const MainFrameWrapper = styled.div`
  position: relative;
`

export const UserFrame: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(100, 100, 100);
  background: rgba(190, 190, 190);
  position: relative;
  border-radius: 5px;
  height: 90vh;
  width: calc(100vw - 50px);
  // @media (max-width: 540px) {
  //   height: ${(props: any) => (props.size === 'big' ? Math.ceil(500 / 1.33) : 0)}px;
  //   width: ${(props: any) => (props.size === 'big' ? 500 : 0)}px;
  // }
  // @media (max-width: 992px) {
  //   height: ${(props: any) => (props.size === 'big' ? Math.ceil(900 / 1.33) : Math.ceil(200 / 1.33))}px;
  //   width: ${(props: any) => (props.size === 'big' ? 900 : 200)}px;
  // }
  // @media (min-width: 993px) {
  //   height: ${(props: any) => (props.size === 'big' ? Math.ceil(600 / 1.33) : Math.ceil(250 / 1.33))}px;
  //   width: ${(props: any) => (props.size === 'big' ? 600 : 250)}px;
  // }
`

export const UserVideo: any = styled.video`
  transform: scaleX(${(props: any) => props.invertX ? '-1' : '1'}) scaleY(${(props: any) => props.invertY ? '-1' : '1'});
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  // @media (max-width: 540px) {
  //   height: ${(props: any) => (props.size === 'big' ? Math.ceil(500 / 1.33) : 0)}px;
  //   width: ${(props: any) => (props.size === 'big' ? 500 : 0)}px;
  // }
  // @media (max-width: 992px) {
  //   height: ${(props: any) => (props.size === 'big' ? Math.ceil(900 / 1.33) : Math.ceil(200 / 1.33))}px;
  //   width: ${(props: any) => (props.size === 'big' ? 900 : 200)}px;
  // }
  // @media (min-width: 993px) {
  //   height: ${(props: any) => (props.size === 'big' ? Math.ceil(600 / 1.33) : Math.ceil(250 / 1.33))}px;
  //   width: ${(props: any) => (props.size === 'big' ? 600 : 250)}px;
  // }
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`
