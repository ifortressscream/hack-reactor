import Navbar from "./components/Navbar";
import StartingContent from "./components/StartingContent";
import SecondContent from "./components/SecondContent";
import UnderLine from "./components/UnderLine";
import ThirdContent from "./components/ThirdContent";
import FourthContent from "./components/FourthContent";
import FifthContent from "./components/FifthContent";
import SixthContent from "./components/SixthContent";
import SeventhContent from "./components/SeventhContent";
import EightContent from "./components/EightContent";
import NinethContent from "./components/NinethContent";
import TenthTitle from "./components/TenthTitle";
import EleventhContent from "./components/EleventhContent";
import TwelvethContent from "./components/TwelvethContent";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <div className="h-28">
        <Navbar />
      </div>
      {/* 1st Content */}
      <StartingContent />
      {/* 2nd Content */}
      <SecondContent />
      {/* UnderLine */}
      <UnderLine />
      {/* 3rd Content */}
      <ThirdContent />
      {/* 4th Content */}
      <FourthContent />
      {/* 5th Content */}
      <FifthContent />
      {/* 6th Content */}
      <SixthContent />
      {/* 7th Content */}
      <SeventhContent />
      {/* 8th Content */}
      <EightContent />
      {/* 9th Content */}
      <NinethContent />
      {/* 10th Content */}
      <TenthTitle />
      {/* 11th Content */}
      <EleventhContent />
      {/* 12th Content */}
      <TwelvethContent />
    </div>
  );
}

export default App;
