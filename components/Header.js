import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 2
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Joakim</span> Melén
        </h1>
        <p className={headerStyles.description}>Welcome to Joakims portfolio site</p>
    </div>
  )
//   return (
//     <div>
//         <h1 className='title'>
//             <span>WEb thjin</span>Prews
//         </h1>
//         <style jsx>
//             {`
//                 .title {
//                     color: ${x > 3 ? "red" : "blue"};
//                 }
//             `}
//         </style>
//     </div>
//   )
}

export default Header