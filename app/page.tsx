"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  ChevronDown,
  CircleDollarSign,
  FileText,
  LayoutDashboard,
  Menu,
  Plus,
  ReceiptText,
  Search,
  Settings2,
  Users,
  WalletCards,
} from "lucide-react";

const invoices = [
  ["INV-1042", "Acme Studio", "₹50,740", "Due soon"],
  ["INV-1041", "Northstar Media", "₹28,500", "Sent"],
  ["INV-1039", "Field Notes Co.", "₹76,000", "Overdue"],
  ["INV-1038", "Aster Works", "₹18,900", "Paid"],
];

const nav = [
  ["Overview", "/", LayoutDashboard],
  ["Invoices", "/invoices", ReceiptText],
  ["Clients", "/clients", Users],
  ["Payments", "#", WalletCards],
  ["Expenses", "#", CircleDollarSign],
  ["Reports", "#", FileText],
];

function MiniChart({ tone = "purple" }: { tone?: "purple" | "green" | "orange" }) {
  const paths = {
    purple: "M3 42 C22 35 28 48 44 37 S68 22 82 31 S106 47 121 25 S146 10 166 20",
    green: "M3 43 C18 31 31 37 46 28 S69 34 84 24 S107 29 122 14 S145 20 166 8",
    orange: "M3 41 C19 40 28 27 43 34 S66 18 80 28 S102 20 117 30 S143 14 166 23",
  };
  return (
    <svg viewBox="0 0 170 50" preserveAspectRatio="none" className={"miniChart " + tone} aria-hidden>
      <path d={paths[tone]} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function Donut() {
  return (
    <div className="donut">
      <span>₹3.84L</span>
      <small>collected</small>
    </div>
  );
}

export default function Home() {
  return (
    <main className="appShell">
      <aside className="sideRail">
        <div className="brandLockup">
          <span className="brandGlyph">F</span>
          <div><strong>FinBooksOS</strong><small>Commercia Route</small></div>
        </div>

        <div className="railLabel">Workspace</div>
        <nav className="railNav">
          {nav.map(([label, href, Icon], i) => {
            const I = Icon as typeof LayoutDashboard;
            return <a key={String(label)} className={i === 0 ? "railItem active" : "railItem"} href={String(href)}><I size={16}/><span>{String(label)}</span>{label === "Invoices" && <b>4</b>}</a>;
          })}
        </nav>

        <div className="railLabel other">Other</div>
        <nav className="railNav">
          <a className="railItem" href="#"><Settings2 size={16}/><span>Settings</span></a>
        </nav>

        <div className="railFooter">
          <div className="profileDot">A</div>
          <div><strong>Workspace</strong><small>Independent</small></div>
          <ChevronDown size={14}/>
        </div>
      </aside>

      <section className="dashboard">
        <header className="dashTop">
          <div className="mobileBrand"><Menu size={18}/><strong>FinBooksOS</strong></div>
          <div className="searchBox"><Search size={15}/><input placeholder="Search anything…" aria-label="Search"/></div>
          <div className="topRight"><button className="iconBtn" aria-label="Notifications"><Bell size={17}/><i/></button><button className="profileBtn"><span>A</span><strong>Workspace</strong><ChevronDown size={13}/></button></div>
        </header>

        <div className="dashInner">
          <header className="heroHead">
            <div><p className="eyebrow">Monday · 1 October 2026</p><h1>Overview</h1><span>Everything important, at a glance.</span></div>
            <a className="accentButton" href="/invoices/new"><Plus size={16}/> New invoice</a>
          </header>

          <section className="metricGrid">
            <article className="metricCard primaryMetric"><div className="metricIcon"><WalletCards size={17}/></div><div className="metricLabel">Outstanding</div><strong>₹1,42,800</strong><small><span className="trend up"><ArrowUpRight size={12}/> 8.4%</span> vs last month</small><MiniChart tone="purple"/></article>
            <article className="metricCard"><div className="metricIcon green"><ReceiptText size={17}/></div><div className="metricLabel">Paid invoices</div><strong>₹3,84,200</strong><small>14 payments this month</small><MiniChart tone="green"/></article>
            <article className="metricCard"><div className="metricIcon orange"><ArrowDownRight size={17}/></div><div className="metricLabel">Due soon</div><strong>₹76,400</strong><small>5 invoices · next 7 days</small><MiniChart tone="orange"/></article>
            <article className="metricCard"><div className="metricIcon red"><CircleDollarSign size={17}/></div><div className="metricLabel">Overdue</div><strong>₹28,500</strong><small><span className="trend down"><ArrowDownRight size={12}/> 2 invoices</span> need attention</small><MiniChart tone="orange"/></article>
          </section>

          <section className="mainGrid">
            <article className="panel revenuePanel">
              <div className="panelHead"><div><p className="eyebrow">Cash flow</p><h2>Receivables</h2></div><div className="segmented"><button className="selected">Monthly</button><button>Weekly</button></div></div>
              <div className="chartMeta"><strong>₹5,63,982</strong><span><b>+10.6%</b> than last month</span></div>
              <div className="bigChart">
                <div className="chartGrid"><span>₹60k</span><span>₹40k</span><span>₹20k</span><span>₹0</span></div>
                <svg viewBox="0 0 700 250" preserveAspectRatio="none" aria-label="Receivables chart"><path d="M0 215 C35 180 58 208 84 174 S132 193 158 132 S207 152 230 104 S274 135 304 95 S346 72 370 118 S417 154 444 91 S488 118 518 62 S562 81 594 48 S642 86 700 28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
            </article>

            <article className="panel collectionPanel">
              <div className="panelHead"><div><p className="eyebrow">This month</p><h2>Collection</h2></div><span className="panelMore">•••</span></div>
              <div className="collectionBody"><Donut/><div className="legend"><div><i className="dot greenDot"/><span>Paid</span><b>68%</b></div><div><i className="dot purpleDot"/><span>Pending</span><b>22%</b></div><div><i className="dot redDot"/><span>Overdue</span><b>10%</b></div></div></div>
            </article>
          </section>

          <section className="lowerGrid">
            <article className="panel invoicePanel">
              <div className="panelHead"><div><p className="eyebrow">Receivables</p><h2>Recent invoices</h2></div><a href="/invoices" className="viewLink">View all <ArrowUpRight size={13}/></a></div>
              <div className="invoiceTable"><div className="invoiceRow invoiceHead"><span>Invoice</span><span>Client</span><span>Amount</span><span>Status</span></div>{invoices.map(([id,client,amount,status])=><a href={"/invoices"} className="invoiceRow" key={id}><span className="mono">{id}</span><span>{client}</span><strong>{amount}</strong><span><i className={"statusPill " + status.toLowerCase().replace(" ","-")}>{status}</i></span></a>)}</div>
            </article>

            <article className="panel attentionPanel">
              <div className="panelHead"><div><p className="eyebrow">Action queue</p><h2>Needs attention</h2></div><span className="countBadge">3</span></div>
              <div className="attentionList"><a href="/invoices"><span className="attentionNumber redText">2</span><div><strong>Overdue invoices</strong><small>Follow up on past-due payments</small></div><ArrowUpRight size={14}/></a><a href="#"><span className="attentionNumber orangeText">2</span><div><strong>Quotes awaiting approval</strong><small>Client action is still pending</small></div><ArrowUpRight size={14}/></a><a href="#"><span className="attentionNumber greenText">1</span><div><strong>Payment received</strong><small>A new payment arrived today</small></div><ArrowUpRight size={14}/></a></div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
