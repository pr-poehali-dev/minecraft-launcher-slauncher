import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface OtherTabsProps {
  activeTab: string;
  mods: Array<{ name: string; version: string; description: string; downloads: string; installed: boolean }>;
  servers: Array<{ name: string; ip: string; online: number; favorite: boolean }>;
  skins: Array<{ name: string; preview: string }>;
}

const OtherTabs = ({ activeTab, mods, servers, skins }: OtherTabsProps) => {
  if (activeTab === 'mods') {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Моды
            </h1>
            <p className="text-muted-foreground">Расширь возможности игры</p>
          </div>
          <Button className="gradient-purple shadow-lg shadow-primary/30">
            <Icon name="Download" size={20} className="mr-2" />
            Установить выбранные
          </Button>
        </div>

        <div className="grid gap-4">
          {mods.map((mod) => (
            <Card key={mod.name} className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{mod.name}</h3>
                    <Badge variant="outline" className="text-xs">v{mod.version}</Badge>
                    {mod.installed && (
                      <Badge className="gradient-blue border-0 text-xs">Установлен</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{mod.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Download" size={14} />
                      <span>{mod.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant={mod.installed ? 'destructive' : 'default'}
                  className={!mod.installed ? 'gradient-purple shadow-lg shadow-primary/30' : ''}
                >
                  {mod.installed ? (
                    <>
                      <Icon name="Trash2" size={18} className="mr-2" />
                      Удалить
                    </>
                  ) : (
                    <>
                      <Icon name="Download" size={18} className="mr-2" />
                      Установить
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'servers') {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Серверы
            </h1>
            <p className="text-muted-foreground">Твои любимые серверы Minecraft</p>
          </div>
          <Button className="gradient-purple shadow-lg shadow-primary/30">
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить сервер
          </Button>
        </div>

        <div className="grid gap-4">
          {servers.map((server) => (
            <Card key={server.name} className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 rounded-lg gradient-blue flex items-center justify-center text-2xl font-bold shadow-lg">
                    {server.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold">{server.name}</h3>
                      {server.favorite && (
                        <Icon name="Star" size={18} className="fill-yellow-500 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{server.ip}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-muted-foreground">
                        {server.online.toLocaleString()} игроков онлайн
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={server.favorite ? 'text-yellow-500' : ''}
                  >
                    <Icon name="Star" size={20} className={server.favorite ? 'fill-yellow-500' : ''} />
                  </Button>
                  <Button className="gradient-purple shadow-lg shadow-primary/30">
                    <Icon name="Play" size={18} className="mr-2" />
                    Подключиться
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'skins') {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Скины
            </h1>
            <p className="text-muted-foreground">Персонализируй своего персонажа</p>
          </div>
          <Button className="gradient-purple shadow-lg shadow-primary/30">
            <Icon name="Upload" size={20} className="mr-2" />
            Загрузить скин
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {skins.map((skin) => (
            <Card 
              key={skin.name} 
              className="p-6 bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all cursor-pointer group hover:scale-105"
            >
              <div className="aspect-square rounded-lg gradient-purple flex items-center justify-center text-6xl mb-4 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all">
                {skin.preview}
              </div>
              <p className="text-center font-semibold">{skin.name}</p>
              <Button size="sm" className="w-full mt-3 gradient-blue" variant="ghost">
                Применить
              </Button>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'settings') {
    return (
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Настройки
          </h1>
          <p className="text-muted-foreground">Настрой лаунчер под себя</p>
        </div>

        <Tabs defaultValue="launcher" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12">
            <TabsTrigger value="launcher" className="text-base">Лаунчер</TabsTrigger>
            <TabsTrigger value="game" className="text-base">Игра</TabsTrigger>
            <TabsTrigger value="security" className="text-base">Безопасность</TabsTrigger>
          </TabsList>
          
          <TabsContent value="launcher" className="space-y-4 mt-6">
            <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Автозапуск игры</Label>
                    <p className="text-sm text-muted-foreground">Запускать игру после выбора версии</p>
                  </div>
                  <Switch />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Закрывать лаунчер</Label>
                    <p className="text-sm text-muted-foreground">Закрывать после запуска игры</p>
                  </div>
                  <Switch />
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Label className="text-base">Язык интерфейса</Label>
                  <Select defaultValue="ru">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="game" className="space-y-4 mt-6">
            <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-base">Оперативная память (RAM)</Label>
                  <Select defaultValue="4">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 GB</SelectItem>
                      <SelectItem value="4">4 GB</SelectItem>
                      <SelectItem value="8">8 GB</SelectItem>
                      <SelectItem value="16">16 GB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Label className="text-base">Разрешение окна</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Input placeholder="Ширина" defaultValue="1920" />
                    </div>
                    <div>
                      <Input placeholder="Высота" defaultValue="1080" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Полноэкранный режим</Label>
                    <p className="text-sm text-muted-foreground">Запускать игру в полноэкранном режиме</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4 mt-6">
            <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <Label className="text-base">Двухфакторная аутентификация</Label>
                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                      Дополнительная защита входа с помощью SMS или приложения
                    </p>
                    <Button className="gradient-blue">
                      <Icon name="Lock" size={18} className="mr-2" />
                      Настроить 2FA
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Шифрование данных</Label>
                    <p className="text-sm text-muted-foreground">Защита данных аккаунтов</p>
                  </div>
                  <Badge className="gradient-blue border-0">Включено</Badge>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Автоблокировка</Label>
                    <p className="text-sm text-muted-foreground">Блокировка после 10 минут бездействия</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div>
                  <Label className="text-base mb-3 block">История входов</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-3">
                        <Icon name="Monitor" size={18} className="text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Windows 11</p>
                          <p className="text-xs text-muted-foreground">192.168.1.100 • Сегодня в 14:32</p>
                        </div>
                      </div>
                      <Badge className="gradient-blue border-0 text-xs">Текущая сессия</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return null;
};

export default OtherTabs;
