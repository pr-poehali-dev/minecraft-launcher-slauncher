import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="w-20 bg-card/50 backdrop-blur-xl border-r border-border/50 flex flex-col items-center py-6 gap-6">
      <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/50">
        S
      </div>
      
      <Separator className="w-8" />
      
      <nav className="flex flex-col gap-4">
        <Button
          variant={activeTab === 'play' ? 'default' : 'ghost'}
          size="icon"
          className={activeTab === 'play' ? 'gradient-purple shadow-lg shadow-primary/50' : 'hover:bg-muted'}
          onClick={() => setActiveTab('play')}
        >
          <Icon name="Play" size={22} />
        </Button>
        
        <Button
          variant={activeTab === 'accounts' ? 'default' : 'ghost'}
          size="icon"
          className={activeTab === 'accounts' ? 'gradient-purple shadow-lg shadow-primary/50' : 'hover:bg-muted'}
          onClick={() => setActiveTab('accounts')}
        >
          <Icon name="Users" size={22} />
        </Button>
        
        <Button
          variant={activeTab === 'mods' ? 'default' : 'ghost'}
          size="icon"
          className={activeTab === 'mods' ? 'gradient-purple shadow-lg shadow-primary/50' : 'hover:bg-muted'}
          onClick={() => setActiveTab('mods')}
        >
          <Icon name="Puzzle" size={22} />
        </Button>
        
        <Button
          variant={activeTab === 'servers' ? 'default' : 'ghost'}
          size="icon"
          className={activeTab === 'servers' ? 'gradient-purple shadow-lg shadow-primary/50' : 'hover:bg-muted'}
          onClick={() => setActiveTab('servers')}
        >
          <Icon name="Server" size={22} />
        </Button>
        
        <Button
          variant={activeTab === 'skins' ? 'default' : 'ghost'}
          size="icon"
          className={activeTab === 'skins' ? 'gradient-purple shadow-lg shadow-primary/50' : 'hover:bg-muted'}
          onClick={() => setActiveTab('skins')}
        >
          <Icon name="Shirt" size={22} />
        </Button>
        
        <Button
          variant={activeTab === 'settings' ? 'default' : 'ghost'}
          size="icon"
          className={activeTab === 'settings' ? 'gradient-purple shadow-lg shadow-primary/50' : 'hover:bg-muted'}
          onClick={() => setActiveTab('settings')}
        >
          <Icon name="Settings" size={22} />
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
