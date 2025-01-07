export default function EditButton({text, className, onClick}) {
   return (
      <button className={className} onClick={onClick}>{text}</button>
   )
}