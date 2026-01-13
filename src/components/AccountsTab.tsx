import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface AccountsTabProps {
  selectedAccount: string;
  setSelectedAccount: (accountId: string) => void;
  accounts: Array<{ id: string; username: string; email: string; verified: boolean }>;
}

const AccountsTab = ({ selectedAccount, setSelectedAccount, accounts }: AccountsTabProps) => {
  return (
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
  );
};

export default AccountsTab;
