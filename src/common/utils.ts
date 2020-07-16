export function resolveCollectionName(name: string): string {
  if (!name) return

  let flag = false
  let newName = ''

  for (let i = 0; i < name.length; ++i) {
    if (name[i] === '-') flag = true
    else if (flag) newName += name[i]
    else newName += name[i]
  }

  return newName + 'Model'
}
