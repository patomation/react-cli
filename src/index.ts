import meow from 'meow'
import mkdirp from 'mkdirp'
import path from 'path'
import fs from 'fs'

const helpMessage = `
Usage
  $ react-cli <input>

Examples
  $ foo ./src/components/NewComponent
`

const cli = meow(
  helpMessage
)

const folderPath = cli.input[0]
const componentName = path.basename(folderPath)

mkdirp.sync(folderPath)

interface handleTemplateOptions {
  templatePath: string
  componentName: string
  fileName?: string
  extension: string
}

const handleTemplate = ({
  templatePath,
  componentName,
  fileName,
  extension
}: handleTemplateOptions) => {
  const content = fs.readFileSync(path.resolve(__dirname, templatePath), 'utf8')
    .replace(/_Component/g, componentName)
  fs.writeFileSync(path.resolve(folderPath, `${fileName || componentName}${extension}`), content)
}

handleTemplate({
  templatePath: '../templates/Component/_Component.module.scss',
  componentName,
  extension: '.module.scss'
})

handleTemplate({
  templatePath: '../templates/Component/_Component.test.tsx',
  componentName,
  extension: '.test.tsx'
})

handleTemplate({
  templatePath: '../templates/Component/_Component.tsx',
  componentName,
  extension: '.tsx'
})

handleTemplate({
  templatePath: '../templates/Component/readme.md',
  componentName,
  fileName: 'readme',
  extension: '.md'
})
