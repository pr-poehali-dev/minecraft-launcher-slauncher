import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

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

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-8">
            {activeTab === 'play' && (
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
            )}

            {activeTab === 'accounts' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Аккаунты
                  </h1>
                  <p className="text-muted-foreground">Управляй своими профилями Minecraft</p>
                </div>

                <div className="grid gap-4">
                  {accounts.map((account) => (
                    <Card 
                      key={account.id} 
                      className={`p-6 bg-card/50 backdrop-blur-xl border-2 transition-all cursor-pointer hover:scale-[1.01] ${
                        selectedAccount === account.id ? 'border-primary shadow-lg shadow-primary/30' : 'border-border/50'
                      }`}
                      onClick={() => setSelectedAccount(account.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-16 h-16 ring-2 ring-primary/30">
                            <AvatarFallback className="gradient-purple text-xl font-bold">
                              {account.username[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-xl font-semibold">{account.username}</p>
                              {account.verified && (
                                <Badge className="gradient-blue border-0 text-xs">
                                  <Icon name="ShieldCheck" size={12} className="mr-1" />
                                  Защищён
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{account.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Icon name="Settings" size={20} />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Icon name="Trash2" size={20} />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Button className="w-full gradient-purple shadow-lg shadow-primary/30 h-14 text-lg">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Добавить аккаунт
                </Button>

                <Card className="p-6 bg-card/50 backdrop-blur-xl border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="ShieldCheck" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Двухфакторная аутентификация</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Защити свои аккаунты дополнительным уровнем безопасности. Включи 2FA для всех профилей.
                      </p>
                      <Button size="sm" className="gradient-blue">
                        Настроить 2FA
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'mods' && (
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
            )}

            {activeTab === 'servers' && (
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
            )}

            {activeTab === 'skins' && (
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
            )}

            {activeTab === 'settings' && (
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
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
