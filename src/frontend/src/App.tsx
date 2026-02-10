import { useState } from 'react';
import ValentineProposalScreen from './components/screens/ValentineProposalScreen';
import RomanticLayout from './components/RomanticLayout';
import { Toaster } from './components/ui/sonner';

function App() {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleYesClick = () => {
        setShowSuccess(true);
    };

    return (
        <RomanticLayout>
            <ValentineProposalScreen onYesClick={handleYesClick} showSuccess={showSuccess} />
            <Toaster />
        </RomanticLayout>
    );
}

export default App;
