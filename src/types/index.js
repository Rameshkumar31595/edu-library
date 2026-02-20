/**
 * @typedef {('admin' | 'user')} UserRole
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} name
 * @property {UserRole} role
 * @property {string} createdAt
 */

/**
 * @typedef {Object} AuthContextType
 * @property {User | null} user
 * @property {boolean} isAuthenticated
 * @property {boolean} isLoading
 * @property {(email: string, password: string) => Promise<void>} login
 * @property {() => void} logout
 * @property {(email: string, password: string, name: string) => Promise<void>} register
 * @property {string | null} token
 */

/**
 * @typedef {Object} Resource
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {string} author
 * @property {string} url
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} ApiResponse
 * @template T
 * @property {T} data
 * @property {string} message
 * @property {number} status
 */

export {};
