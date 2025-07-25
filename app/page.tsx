import Layout from './components/UI/Layout/Layout';
import styles from './page.module.scss';

// Sections
import { ChatSetupSection } from './components/Home/ChatSection';
import { DataPrivacySection } from './components/Home/DataPrivacySection/DataPrivacySection';
import { RealResults } from './components/Home/RealResults/RealResults';
import { SetupStepsSection } from './components/Home/SetupStepsSection/SetupStepsSection';
import { SpeaksLikeYouSection } from './components/Home/SpeaksLikeYouSection/SpeaksLikeYouSection';
import { WhatDoesntSection } from './components/Home/WhatDoesntSection/WhatDoesntSection';
import { WhatDoesSection } from './components/Home/WhatDoesSection/WhatDoesSection';
import { ChatAgentForYouSection } from './components/Home/ChatAgentForYouSection/ChatAgentForYouSection';
export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Layout>
        <ChatSetupSection />
        <div className={styles.homeContent}>
          <ChatAgentForYouSection />
          <WhatDoesSection />
          <WhatDoesntSection />
          <SpeaksLikeYouSection />
          <RealResults />
          <SetupStepsSection />
          <DataPrivacySection />
        </div>
      </Layout>
    </div>
  );
}
