
import './App.css';
import TopNav from './component/TopNav'
import Main from './component/Main'
import Side from './component/Side'
import DialogBox from './component/DialogBox'
import Summary from './component/Summary'
import {useSelector,useDispatch} from 'react-redux'

// function AUTHENTICATE(){
//   return <div className="AU">
//     <div className='template'>
//       <div className='upper--wrapper'>
//         <div className='title--label'>Are you sure you wanted to proceed?</div>
//       </div>
//       <div className='lower--wrapper'>
//         <button> Cancel</button><button> Proceed</button>
//      </div>
      
//     </div>
//   </div>
// }
function prompt(type){ // Here is the event
  return{ type}
}
function DISPLAY_INSTRUCTIONS(section,dispatch){
  return(<div className='single'> {/* Set up a single section with fixed height and weight */}
          {/* {output(section)} */}
          <div className='template flex'>
            <ol start= "0">
              <li><span>{section.name}</span></li>
              <li>Tujuan Bahagian ini adalah untuk menguji kefahaman calon tentang tanda simbol / papan tanda jalan raya.</li>
              <li>Jawab semua soalan dalam bahagian ini.</li>
              <li>Kebanyakan calon gagal menjawab semua soalan dengan betul dalam bahagian ini.</li>
              <li>Baca soalan dengan teliti dan pilih jawapan yang paling tepat.</li>
              <li>Jika anda kurang pasti dengan jawapan yang dipilih, sila rujuk balik Buku Kurikulum Pendidikan Pemandu (KPP).</li>
              <li>Sila tekan soalan set di bawah untuk membuat latihan:</li>
              <li><button onClick={()=> dispatch(prompt(section.name))} >Next</button></li>
            </ol>
          </div>
         </div>)
}

function App() {
  const REACHED = useSelector(item => item.PROCEED)
  const SECTION = useSelector(item => item.SECTION)
  const TIMER = useSelector(item => item.COUNTDOWN)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <TopNav/>
        {/* Now changing the logic from != -> == */}
        {SECTION.name !== 'FINAL'&& TIMER.time !==0 ? <>{REACHED[SECTION.id] === false ? DISPLAY_INSTRUCTIONS(SECTION,dispatch) :
                                 <div className='wrapper'><Main/><Side/></div>}</>: 
                                 <div className='single'><Summary/></div> }
      <DialogBox/>
    </div>
  );
}

export default App;
