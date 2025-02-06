import {StaticComponent} from "./components/StaticComponent";
import {PropsComponent} from "./components/PropsComponent";
import {WrapperComponent} from "./components/WrapperComponent";
import {ListComponent} from "./components/ListComponent";
import {InteractiveComponent} from "./components/InteractiveComponent";
import {FetchDataComponent} from "./components/FetchDataComponent";
import {dataList} from "./data/Data";
import { AnimatedComponent } from "./components/AnimatedComponent";
import { DarkModeToggle } from "./components/DarkModeComponent";
const App = () => {
  return (
    <div className="p-6 font-sans bg-green-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-green-900 mb-6">React Dokumentasjons Galleri</h1>
      <div className="space-y-6">
        <DarkModeToggle />
        <StaticComponent />
        <PropsComponent title="Eksempel på Props" description="Denne komponenten tar imot properties." />
        <WrapperComponent>
          <p className="text-lg">Dette er innhold inni en wrapper-komponent.</p>
        </WrapperComponent>
        <ListComponent items={dataList} />
        <InteractiveComponent />
        <FetchDataComponent />
        <AnimatedComponent />
    
      </div>
    </div>
  );
};

export default App;