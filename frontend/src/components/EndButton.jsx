import { MdExitToApp } from 'react-icons/md';

const EndButton = () => {
  return (
    <button
      className="btn btn-error flex items-center gap-2">
      <MdExitToApp className="text-xl" />
      End Exam
    </button>

  )
}

export default EndButton;