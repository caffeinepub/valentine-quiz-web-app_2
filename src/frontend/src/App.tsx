import ValentineProposalScreen from './components/screens/ValentineProposalScreen';
import RomanticLayout from './components/RomanticLayout';
import { Toaster } from './components/ui/sonner';

function App() {
    return (
        <RomanticLayout>
            <ValentineProposalScreen />
            <Toaster />
        </RomanticLayout>
    );
}

export default App;
