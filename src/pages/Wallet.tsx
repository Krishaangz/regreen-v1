
import React, { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  CreditCard, 
  ArrowRight, 
  Wallet, 
  Download, 
  Upload, 
  Plus, 
  RefreshCw,
  Clock 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuthStore } from '@/stores/authStore';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

const WalletPage = () => {
  const { role } = useRole();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [fundDialogOpen, setFundDialogOpen] = useState(false);
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false);
  const [fundAmount, setFundAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  // Mock wallet data - in a real app this would come from your backend
  const balance = useAuthStore(state => state.walletBalance) || (role === 'landowner' ? 4500 : role === 'worker' ? 780 : 0);
  const updateWalletBalance = useAuthStore(state => state.updateWalletBalance);
  
  // Mock transaction history
  const transactions = [
    { id: 1, type: 'deposit', amount: 2000, status: 'completed', date: '2023-05-15', description: 'Project funding' },
    { id: 2, type: 'withdrawal', amount: 500, status: 'completed', date: '2023-05-20', description: 'Bank transfer' },
    { id: 3, type: 'payment', amount: 350, status: 'completed', date: '2023-05-25', description: 'Worker payment' },
    { id: 4, type: 'deposit', amount: 1000, status: 'completed', date: '2023-06-01', description: 'Project funding' },
    { id: 5, type: 'payment', amount: 450, status: 'pending', date: '2023-06-05', description: 'Worker payment' },
  ];

  // For workers, show earnings instead
  const workerEarnings = [
    { id: 1, project: 'Oak Valley Restoration', task: 'Tree planting', amount: 180, date: '2023-05-15', status: 'paid' },
    { id: 2, project: 'Meadow Ridge Revival', task: 'Soil preparation', amount: 220, date: '2023-05-22', status: 'paid' },
    { id: 3, project: 'Riverside Wetland', task: 'Native plantings', amount: 380, date: '2023-06-01', status: 'paid' },
    { id: 4, project: 'Cedar Lake Restoration', task: 'Invasive removal', amount: 250, date: '2023-06-05', status: 'pending' },
  ];

  // Mock project funding data for landowners
  const projectFunding = [
    {
      id: 1,
      name: 'Oak Valley Restoration',
      allocated: 2000,
      used: 1200,
      remaining: 800,
      workers: 5,
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Meadow Ridge Revival',
      allocated: 1500,
      used: 700,
      remaining: 800,
      workers: 3,
      status: 'In Progress'
    }
  ];

  const handleAddFunds = () => {
    if (!fundAmount || isNaN(parseFloat(fundAmount)) || parseFloat(fundAmount) <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    const amount = parseFloat(fundAmount);
    updateWalletBalance(balance + amount);
    
    toast({
      title: "Success",
      description: `$${amount.toFixed(2)} has been added to your wallet`,
      variant: "default",
    });
    
    setFundDialogOpen(false);
    setFundAmount('');
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || isNaN(parseFloat(withdrawAmount)) || parseFloat(withdrawAmount) <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    const amount = parseFloat(withdrawAmount);
    
    if (amount > balance) {
      toast({
        title: "Error",
        description: "Insufficient funds",
        variant: "destructive",
      });
      return;
    }

    updateWalletBalance(balance - amount);
    
    toast({
      title: "Success",
      description: `$${amount.toFixed(2)} will be transferred to your bank account within 2-3 business days`,
      variant: "default",
    });
    
    setWithdrawDialogOpen(false);
    setWithdrawAmount('');
  };

  return (
    <div className="container mx-auto py-8 space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Wallet & Payments</h1>
      <p className="text-muted-foreground">Manage your ReGreen wallet, project funding, and payments</p>

      <Card className="bg-gradient-to-r from-regreen-600/20 to-blue-700/20 backdrop-blur">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-muted-foreground">Current Balance</p>
              <h2 className="text-4xl font-bold">${balance.toFixed(2)}</h2>
              <p className="text-sm text-muted-foreground mt-1">Available for {role === 'landowner' ? 'project funding' : 'withdrawal'}</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              {role === 'landowner' && (
                <Button 
                  className="bg-regreen-600 hover:bg-regreen-700 text-white"
                  onClick={() => setFundDialogOpen(true)}
                >
                  <Plus size={16} className="mr-2" />
                  Add Funds
                </Button>
              )}
              <Button 
                variant="outline" 
                onClick={() => setWithdrawDialogOpen(true)}
              >
                <Download size={16} className="mr-2" />
                Withdraw
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {role === 'landowner' ? (
            <TabsTrigger value="funding">Project Funding</TabsTrigger>
          ) : (
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          )}
          <TabsTrigger value="history">Transaction History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                {role === 'landowner' && (
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center justify-center h-24"
                    onClick={() => setFundDialogOpen(true)}
                  >
                    <Upload size={24} className="mb-2" />
                    <span>Add Funds</span>
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-24"
                  onClick={() => setWithdrawDialogOpen(true)}
                >
                  <Download size={24} className="mb-2" />
                  <span>Withdraw</span>
                </Button>
                {role === 'landowner' && (
                  <Button 
                    variant="outline" 
                    className="flex flex-col items-center justify-center h-24"
                    onClick={() => setActiveTab('funding')}
                  >
                    <CreditCard size={24} className="mb-2" />
                    <span>Project Funding</span>
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-24"
                  onClick={() => setActiveTab('history')}
                >
                  <Clock size={24} className="mb-2" />
                  <span>Transaction History</span>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {transactions.slice(0, 3).map(transaction => (
                  <div key={transaction.id} className="flex justify-between items-center border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="flex items-center">
                      <span className={`font-semibold ${transaction.type === 'deposit' ? 'text-green-600' : transaction.type === 'withdrawal' ? 'text-red-600' : 'text-amber-600'}`}>
                        {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </span>
                      <Badge variant={transaction.status === 'completed' ? 'outline' : 'secondary'} className="ml-2">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" onClick={() => setActiveTab('history')}>
                  View All Transactions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {role === 'landowner' && (
            <Card>
              <CardHeader>
                <CardTitle>Project Funding Overview</CardTitle>
                <CardDescription>
                  Track funding allocation across your active projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projectFunding.map(project => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.workers} workers assigned</p>
                      </div>
                      <Badge>{project.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={(project.used / project.allocated) * 100} className="h-2" />
                      <span className="text-sm whitespace-nowrap">${project.used} / ${project.allocated}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" onClick={() => setActiveTab('funding')}>
                  Manage Project Funding
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {role === 'worker' && (
            <Card>
              <CardHeader>
                <CardTitle>Earnings Summary</CardTitle>
                <CardDescription>
                  Track your earnings from ReGreen projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted p-4 rounded-md text-center">
                    <p className="text-sm text-muted-foreground">Current Month</p>
                    <p className="text-2xl font-bold">$630.00</p>
                    <p className="text-xs text-green-600">+12% from last month</p>
                  </div>
                  <div className="bg-muted p-4 rounded-md text-center">
                    <p className="text-sm text-muted-foreground">Pending Payments</p>
                    <p className="text-2xl font-bold">$250.00</p>
                    <p className="text-xs text-amber-600">2 tasks pending</p>
                  </div>
                  <div className="bg-muted p-4 rounded-md text-center">
                    <p className="text-sm text-muted-foreground">Total Earned</p>
                    <p className="text-2xl font-bold">$1,030.00</p>
                    <p className="text-xs text-muted-foreground">All time</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" onClick={() => setActiveTab('earnings')}>
                  View Detailed Earnings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>
        
        {role === 'landowner' && (
          <TabsContent value="funding" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Funding Management</CardTitle>
                <CardDescription>
                  Manage and allocate funds to your active restoration projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {projectFunding.map(project => (
                  <div key={project.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <Badge className="mt-1">{project.status}</Badge>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-sm text-muted-foreground">Total Allocated</p>
                        <p className="text-xl font-bold">${project.allocated.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Funding Usage</span>
                        <span>{Math.round((project.used / project.allocated) * 100)}% used</span>
                      </div>
                      <Progress value={(project.used / project.allocated) * 100} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Funds Used</p>
                        <p className="font-medium">${project.used.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Remaining Funds</p>
                        <p className="font-medium">${project.remaining.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Workers Assigned</p>
                        <p className="font-medium">{project.workers}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Average Cost per Worker</p>
                        <p className="font-medium">${(project.used / project.workers).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-col xs:flex-row gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => {
                          toast({
                            title: "Success",
                            description: "Funding details downloaded as PDF",
                            variant: "default",
                          });
                        }}
                      >
                        Download Report
                      </Button>
                      <Button 
                        className="flex-1 bg-regreen-600 hover:bg-regreen-700 text-white"
                        onClick={() => {
                          toast({
                            title: "Funding Adjustment",
                            description: "Please contact support to adjust project funding",
                            variant: "default",
                          });
                        }}
                      >
                        Adjust Funding
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button 
                  onClick={() => {
                    toast({
                      title: "Coming Soon",
                      description: "New project funding allocation will be available soon",
                      variant: "default",
                    });
                  }}
                >
                  <Plus size={16} className="mr-2" />
                  Add New Project Funding
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        )}
        
        {role === 'worker' && (
          <TabsContent value="earnings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Earnings</CardTitle>
                <CardDescription>
                  Track your earnings from completed tasks and projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 font-medium p-3 border-b bg-muted/50 text-sm">
                    <div className="col-span-2">Project & Task</div>
                    <div>Date</div>
                    <div className="text-right">Amount</div>
                    <div className="text-right">Status</div>
                  </div>
                  {workerEarnings.map(earning => (
                    <div key={earning.id} className="grid grid-cols-5 p-3 border-b last:border-0 text-sm hover:bg-muted/20">
                      <div className="col-span-2">
                        <div className="font-medium">{earning.project}</div>
                        <div className="text-muted-foreground">{earning.task}</div>
                      </div>
                      <div className="self-center">{earning.date}</div>
                      <div className="self-center text-right font-medium">${earning.amount.toFixed(2)}</div>
                      <div className="self-center text-right">
                        <Badge variant={earning.status === 'paid' ? 'outline' : 'secondary'}>
                          {earning.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-muted-foreground">
                  Total Earnings: <span className="font-medium">${workerEarnings.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}</span>
                </p>
                <Button variant="outline" onClick={() => {
                  toast({
                    title: "Report Generated",
                    description: "Your earnings report has been downloaded",
                    variant: "default",
                  });
                }}>
                  <Download size={16} className="mr-2" />
                  Download Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        )}
        
        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>
                Complete record of all transactions on your ReGreen wallet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 font-medium p-3 border-b bg-muted/50 text-sm">
                  <div className="col-span-2">Description</div>
                  <div>Date</div>
                  <div>Type</div>
                  <div className="text-right">Amount</div>
                </div>
                {transactions.map(transaction => (
                  <div key={transaction.id} className="grid grid-cols-5 p-3 border-b last:border-0 text-sm hover:bg-muted/20">
                    <div className="col-span-2">
                      <div className="font-medium">{transaction.description}</div>
                      <Badge variant={transaction.status === 'completed' ? 'outline' : 'secondary'}>
                        {transaction.status}
                      </Badge>
                    </div>
                    <div className="self-center">{transaction.date}</div>
                    <div className="self-center capitalize">{transaction.type}</div>
                    <div className={`self-center text-right font-medium ${
                      transaction.type === 'deposit' ? 'text-green-600' : transaction.type === 'withdrawal' ? 'text-red-600' : 'text-amber-600'
                    }`}>
                      {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => {
                toast({
                  title: "Statement Generated",
                  description: "Your transaction statement has been downloaded",
                  variant: "default",
                });
              }}>
                <Download size={16} className="mr-2" />
                Download Statement
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add Funds Dialog */}
      <Dialog open={fundDialogOpen} onOpenChange={setFundDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Funds to Wallet</DialogTitle>
            <DialogDescription>
              Add funds to your ReGreen wallet for project funding and payments.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <div className="col-span-3 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                <Input
                  id="amount"
                  type="number"
                  value={fundAmount}
                  onChange={(e) => setFundAmount(e.target.value)}
                  className="pl-8"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="payment-method" className="text-right">
                Payment Method
              </Label>
              <div className="col-span-3">
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger id="payment-method">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFundDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-regreen-600 hover:bg-regreen-700 text-white"
              onClick={handleAddFunds}
            >
              Add Funds
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Withdraw Funds Dialog */}
      <Dialog open={withdrawDialogOpen} onOpenChange={setWithdrawDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Withdraw Funds</DialogTitle>
            <DialogDescription>
              Withdraw funds from your ReGreen wallet to your bank account.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="withdraw-amount" className="text-right">
                Amount
              </Label>
              <div className="col-span-3 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                <Input
                  id="withdraw-amount"
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="pl-8"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bank-account" className="text-right">
                Bank Account
              </Label>
              <div className="col-span-3">
                <Select defaultValue="primary">
                  <SelectTrigger id="bank-account">
                    <SelectValue placeholder="Select bank account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary Account (****4321)</SelectItem>
                    <SelectItem value="savings">Savings Account (****7890)</SelectItem>
                    <SelectItem value="add">+ Add New Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Note: Withdrawals typically take 2-3 business days to process.
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setWithdrawDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleWithdraw}
            >
              Withdraw Funds
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WalletPage;
