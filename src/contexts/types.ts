import {
  Login,
  RegisterContact,
  RegisterUser,
  UpdateContact,
  UpdateUser,
} from "../validations/types"

interface User {
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
  id: string
}
interface Contact {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  createdAt: string
}

interface AuthContext {
  login(dataLogin: Login): Promise<void>
  register(dataRegister: RegisterUser): Promise<void>
  logout(): Promise<void>
  card: string
  toggleCard(card: string): void
}

interface UserContext {
  user: User | undefined
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  updateUser(dataUser: UpdateUser): Promise<void>
}

interface ContactsContext {
  contacts: Contact[]
  createContact(contactData: RegisterContact): Promise<void>
  showModalNewContact: boolean
  showModalSeeContact: boolean
  currentContact: Contact | undefined
  setShowModalNewContact: React.Dispatch<React.SetStateAction<boolean>>
  setShowModalSeeContact: React.Dispatch<React.SetStateAction<boolean>>
  deleteContact(contactId: string): Promise<void>
  selectContact(contact: Contact): void
  updateContact(contactId: string, contactData: UpdateContact): Promise<void>
}

interface ProviderProps {
  children: React.ReactNode
}

export {
  AuthContext,
  ContactsContext,
  User,
  UserContext,
  ProviderProps,
  Contact,
}
