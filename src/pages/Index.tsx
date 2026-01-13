import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import PlayTab from '@/components/PlayTab';
import AccountsTab from '@/components/AccountsTab';
import OtherTabs from '@/components/OtherTabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('play');
  const [selectedVersion, setSelectedVersion] = useState('1.20.4');
  const [selectedAccount, setSelectedAccount] = useState('player1');

  const minecraftVersions = [
    { version: '1.20.4', type: 'Release', popular: true },
    { version: '1.19.4', type: 'Release', popular: false },
    { version: '1.18.2', type: 'Release', popular: true },
    { version: '1.12.2', type: 'Release', popular: true },
    { version: '1.8.9', type: 'Release', popular: false },
  ];

  const accounts = [
    { id: 'player1', username: 'Steve_Builder', email: 'steve@minecraft.net', verified: true },
    { id: 'player2', username: 'Alex_Miner', email: 'alex@minecraft.net', verified: true },
  ];

  const mods = [
    { name: 'OptiFine', version: '1.20.4', description: 'Графические улучшения и оптимизация', downloads: '125M', installed: true },
    { name: 'JourneyMap', version: '1.20.4', description: 'Мини-карта и система навигации', downloads: '50M', installed: false },
    { name: 'Just Enough Items', version: '1.20.4', description: 'Просмотр рецептов крафта', downloads: '80M', installed: true },
    { name: 'Biomes O Plenty', version: '1.20.4', description: 'Новые биомы и локации', downloads: '45M', installed: false },
  ];

  const servers = [
    { name: 'Hypixel', ip: 'mc.hypixel.net', online: 45000, favorite: true },
    { name: 'Mineplex', ip: 'us.mineplex.com', online: 15000, favorite: false },
    { name: 'CubeCraft', ip: 'play.cubecraft.net', online: 8000, favorite: true },
  ];

  const skins = [
    { name: 'Knight', preview: '🛡️' },
    { name: 'Wizard', preview: '🧙' },
    { name: 'Ninja', preview: '🥷' },
    { name: 'Pirate', preview: '🏴‍☠️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#1A1F2C]">
      <div className="flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-8">
            {activeTab === 'play' && (
              <PlayTab
                selectedVersion={selectedVersion}
                setSelectedVersion={setSelectedVersion}
                selectedAccount={selectedAccount}
                minecraftVersions={minecraftVersions}
                accounts={accounts}
              />
            )}

            {activeTab === 'accounts' && (
              <AccountsTab
                selectedAccount={selectedAccount}
                setSelectedAccount={setSelectedAccount}
                accounts={accounts}
              />
            )}

            {(activeTab === 'mods' || activeTab === 'servers' || activeTab === 'skins' || activeTab === 'settings') && (
              <OtherTabs
                activeTab={activeTab}
                mods={mods}
                servers={servers}
                skins={skins}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
