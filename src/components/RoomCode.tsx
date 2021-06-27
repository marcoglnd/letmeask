import copyImg from '../assets/images/copy.svg';
import '../styles/roomcode.scss'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRunCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return(
    <button className="room-code" onClick={copyRunCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy Room Code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}