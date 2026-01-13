import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface PlayTabProps {
  selectedVersion: string;
  setSelectedVersion: (version: string) => void;
  selectedAccount: string;
  minecraftVersions: Array<{ version: string; type: string; popular: boolean }>;
  accounts: Array<{ id: string; username: string; email: string; verified: boolean }>;
}

const PlayTab = ({ selectedVersion, setSelectedVersion, selectedAccount, minecraftVersions, accounts }: PlayTabProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Готов к игре?
        </h1>
        <p className="text-muted-foreground">Выбери версию и запускай Minecraft</p>
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur-xl border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="relative space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 ring-2 ring-primary/50">
              <AvatarFallback className="gradient-purple text-2xl font-bold">S</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Играешь как</p>
              <p className="text-xl font-semibold">{accounts.find(a => a.id === selectedAccount)?.username}</p>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <Label className="text-base">Версия Minecraft</Label>
            <Select value={selectedVersion} onValueChange={setSelectedVersion}>
              <SelectTrigger className="w-full h-14 text-lg border-2 border-border/50 hover:border-primary/50 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {minecraftVersions.map((v) => (
                  <SelectItem key={v.version} value={v.version} className="text-lg py-3">
                    <div className="flex items-center gap-3">
                      <span>{v.version}</span>
                      {v.popular && (
                        <Badge className="gradient-purple border-0">Популярная</Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            size="lg" 
            className="w-full h-16 text-xl font-bold gradient-purple shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-[1.02]"
          >
            <Icon name="Play" size={24} className="mr-2" />
            Запустить игру
          </Button>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <Card className="p-4 bg-muted/30 border-border/30 text-center">
              <p className="text-2xl font-bold text-primary">24</p>
              <p className="text-xs text-muted-foreground">Установлено модов</p>
            </Card>
            <Card className="p-4 bg-muted/30 border-border/30 text-center">
              <p className="text-2xl font-bold text-secondary">128 ч</p>
              <p className="text-xs text-muted-foreground">Времени в игре</p>
            </Card>
            <Card className="p-4 bg-muted/30 border-border/30 text-center">
              <p className="text-2xl font-bold text-accent">5</p>
              <p className="text-xs text-muted-foreground">Любимых серверов</p>
            </Card>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">Быстрый доступ</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Server" size={24} />
              </div>
              <div>
                <p className="font-semibold">Hypixel</p>
                <p className="text-sm text-muted-foreground">45,000 игроков онлайн</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-secondary/50 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Puzzle" size={24} />
              </div>
              <div>
                <p className="font-semibold">Обновить моды</p>
                <p className="text-sm text-muted-foreground">3 обновления доступно</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlayTab;
