export function getUserRole(email: string): 'BUSINESS' | 'ADVOCATE' {
  if (email.endsWith('@business.com')) return 'BUSINESS';
  return 'ADVOCATE';
}