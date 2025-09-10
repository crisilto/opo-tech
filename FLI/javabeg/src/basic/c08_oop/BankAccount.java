package basic.c08_oop;

class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Depósito realizado: " + amount + "€. Balance actual: " + balance);
        } else {
            System.out.println("El monto del depósito debe ser positivo");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Retirada de " + amount + "€ realizada. Balance: " + balance);
        } else {
            System.out.println("Monto inválido o saldo insuficiente");
        }
    }

    public void showBalance() {
        System.out.println("Saldo de la cuenta " + accountNumber + ": " + balance + "€");
    }

    // 👇 Método protegido para que hereden las subclases
    protected void applyInterest(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}

// Clase hija
class SavingsBankAccount extends BankAccount {
    private double interestRate;

    public SavingsBankAccount(String accountNumber, double initialBalance, double interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    public void addInterest() {
        double interest = getBalance() * interestRate;
        applyInterest(interest);
        System.out.println("Interés añadido: " + interest + "€. Nuevo balance: " + getBalance());
    }
}