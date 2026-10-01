import {ArrowUpRight,Mail,Phone,Plus,Search,UsersRound} from "lucide-react";
import AppShell from "../../components/AppShell";
import styles from "./page.module.css";
const clients=[["Acme Studio","accounts@acmestudio.co","29AAACA1234A1Z5","₹50,740"],["Northstar Media","finance@northstar.media","27AAACN8821D1Z2","₹28,500"],["Field Notes Co.","hello@fieldnotes.co","—","₹76,000"],["Aster Works","billing@asterworks.in","29AAACA5521A1Z9","₹18,900"]];
export default function ClientsPage(){return <AppShell title="Clients" subtitle="Your billing relationships, contacts and receivables in one place." action={<a href="/invoices/new" className={styles.primary}><Plus size={14}/> New invoice</a>}>
<section className={styles.stats}><div><UsersRound size={16}/><span>Active clients</span><b>24</b></div><div><ArrowUpRight size={16}/><span>Outstanding</span><b>₹1,42,800</b></div><div><Mail size={16}/><span>Awaiting payment</span><b>8 invoices</b></div></section>
<section className={styles.toolbar}><button className={styles.search}><Search size={14}/> Search clients</button></section>
<div className={styles.table}><div className={styles.head}><span>Client</span><span>GSTIN</span><span>Outstanding</span><span>Contact</span></div>{clients.map(([name,email,gstin,amount])=><a href="#" className={styles.row} key={name}><div className={styles.client}><b>{name}</b><small>{email}</small></div><span className={styles.mono}>{gstin}</span><strong>{amount}</strong><span className={styles.contact}><Mail size={13}/><Phone size={13}/></span></a>)}</div>
</AppShell>}
