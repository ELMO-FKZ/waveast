

function BackgroundLight() {

  return (
  <svg className="section__background" xmlns="http://www.w3.org/2000/svg" id="patternIdOne" width="100%" height="100%">
    <defs>
      <pattern id="a" width="91.767" height="80" patternTransform="rotate(20)" patternUnits="userSpaceOnUse">
        <rect className="section__background-rect" fill="var(--primary-background-color)" width="100%" height="100%"></rect>
        <path className="section__background-path" fill="var(--secondary-background-color)" d="M77.439 0c.478.2.95.41 1.435.627 3.006 1.34 6.41 2.857 12.887 2.857V0ZM45.88 3.484c6.478 0 9.884-1.517 12.89-2.857C59.253.41 59.725.2 60.204 0H31.558c.478.2.95.41 1.435.627 3.005 1.34 6.412 2.857 12.887 2.857m27.258 40.779c-2.713 1.21-5.058 2.253-10.051 2.253-4.996 0-7.34-1.043-10.055-2.253-3.005-1.338-6.412-2.857-12.887-2.857-6.474 0-9.881 1.519-12.887 2.857-2.715 1.21-5.058 2.253-10.054 2.253-4.993 0-7.336-1.043-10.05-2.253-1.965-.876-4.102-1.825-7.153-2.38v7.127c1.616.415 2.919.994 4.317 1.618 3.006 1.338 6.413 2.854 12.887 2.854 6.478 0 9.884-1.517 12.89-2.854 2.712-1.21 5.057-2.255 10.05-2.255 4.996 0 7.34 1.046 10.055 2.255 3.005 1.338 6.41 2.854 12.887 2.854 6.474 0 9.881-1.517 12.887-2.854 2.715-1.21 5.058-2.255 10.05-2.255 2.418 0 4.216.245 5.737.637v-7.127c-1.618-.293-3.493-.477-5.736-.477-6.475 0-9.882 1.519-12.887 2.857m-5.734 10c-2.715 1.21-5.058 2.253-10.054 2.253-4.993 0-7.337-1.043-10.051-2.253-3.006-1.338-6.413-2.857-12.887-2.857-6.478 0-9.882 1.52-12.89 2.857-2.712 1.21-5.057 2.253-10.05 2.253s-7.34-1.043-10.052-2.253c-.46-.205-.929-.413-1.419-.62v7.606c2.703 1.145 5.985 2.234 11.47 2.234 6.475 0 9.882-1.516 12.888-2.854 2.715-1.21 5.058-2.255 10.054-2.255 4.993 0 7.337 1.045 10.05 2.255 3.006 1.338 6.413 2.854 12.888 2.854 6.477 0 9.882-1.516 12.887-2.854 2.715-1.21 5.058-2.255 10.054-2.255 4.993 0 7.339 1.045 10.051 2.255q.688.309 1.42.62v-7.606c-2.704-1.147-5.985-2.237-11.471-2.237-6.479 0-9.883 1.52-12.888 2.857m7.153 7.144c-6.477 0-9.884 1.519-12.889 2.857-2.712 1.21-5.058 2.253-10.051 2.253-4.996 0-7.339-1.043-10.054-2.253-3.005-1.338-6.41-2.857-12.887-2.857-6.475 0-9.882 1.519-12.887 2.857-2.715 1.21-5.058 2.253-10.051 2.253-2.42 0-4.218-.244-5.737-.637v7.128c1.618.294 3.492.475 5.737.475 6.474 0 9.881-1.517 12.887-2.857 2.712-1.207 5.058-2.253 10.05-2.253 4.997 0 7.34 1.046 10.055 2.253 3.005 1.34 6.412 2.857 12.887 2.857s9.882-1.517 12.887-2.857c2.715-1.207 5.058-2.253 10.054-2.253 4.993 0 7.336 1.046 10.051 2.253 1.965.876 4.101 1.828 7.153 2.38V65.88c-1.616-.413-2.919-.991-4.317-1.616-3.006-1.337-6.413-2.856-12.888-2.856zm-5.737 10c-6.474 0-9.881 1.517-12.887 2.857-2.714 1.21-5.058 2.252-10.05 2.252-4.996 0-7.34-1.043-10.055-2.253-3.005-1.34-6.412-2.857-12.887-2.857-6.477 0-9.882 1.517-12.887 2.857C7.34 75.474 4.997 76.516.001 76.516V80h14.326c2.2-.922 4.513-1.626 8.614-1.626 4.1 0 6.414.703 8.612 1.626h28.656c2.197-.922 4.512-1.626 8.611-1.626 4.101 0 6.415.703 8.614 1.626h14.327v-3.484c-4.996 0-7.34-1.043-10.055-2.253-3.004-1.34-6.408-2.856-12.886-2.856m7.154-67.142c-3.006-1.34-6.413-2.857-12.887-2.857-6.478 0-9.882 1.517-12.887 2.857-2.716 1.208-5.059 2.253-10.055 2.253-4.993 0-7.338-1.045-10.05-2.253-3.006-1.34-6.413-2.857-12.89-2.857-6.474 0-9.881 1.517-12.887 2.857-1.398.622-2.7 1.202-4.317 1.615v7.128c3.051-.554 5.188-1.505 7.153-2.38 2.715-1.21 5.058-2.254 10.051-2.254 4.995 0 7.34 1.044 10.054 2.253 3.006 1.34 6.413 2.857 12.887 2.857s9.882-1.517 12.887-2.857c2.716-1.21 5.059-2.253 10.055-2.253 4.993 0 7.336 1.044 10.05 2.253 3.006 1.34 6.413 2.857 12.888 2.857 2.245 0 4.12-.18 5.736-.475V5.88c-1.52.39-3.319.637-5.736.637-4.994-.001-7.337-1.046-10.052-2.253Zm4.317 12.252c-4.995 0-7.339-1.045-10.054-2.253-3.005-1.34-6.41-2.857-12.887-2.857-6.475 0-9.882 1.517-12.887 2.857-2.715 1.208-5.058 2.253-10.051 2.253-4.995 0-7.34-1.045-10.054-2.253-3.006-1.34-6.413-2.857-12.887-2.857-5.486 0-8.767 1.09-11.471 2.237v7.604q.73-.312 1.42-.62c2.712-1.21 5.057-2.253 10.05-2.253s7.34 1.043 10.052 2.253c3.007 1.338 6.412 2.857 12.889 2.857 6.474 0 9.881-1.52 12.887-2.857 2.715-1.21 5.058-2.253 10.05-2.253 4.996 0 7.34 1.043 10.055 2.253 3.005 1.338 6.412 2.857 12.887 2.857 5.485 0 8.767-1.09 11.47-2.237v-7.606a81 81 0 0 0-1.419.622c-2.711 1.208-5.057 2.253-10.05 2.253m-5.734 10c-4.996 0-7.339-1.044-10.054-2.254-3.005-1.338-6.412-2.854-12.887-2.854s-9.882 1.517-12.887 2.854c-2.715 1.21-5.058 2.255-10.054 2.255-4.993 0-7.339-1.045-10.051-2.255-3.005-1.338-6.413-2.854-12.887-2.854-2.244 0-4.118.18-5.737.476v7.128c1.519-.393 3.316-.637 5.737-.637 4.993 0 7.337 1.044 10.05 2.253 3.006 1.338 6.413 2.857 12.888 2.857 6.477 0 9.882-1.519 12.887-2.857 2.715-1.21 5.058-2.253 10.054-2.253 4.993 0 7.339 1.044 10.051 2.253 3.005 1.338 6.413 2.857 12.89 2.857 6.474 0 9.881-1.519 12.886-2.857 1.398-.625 2.701-1.203 4.318-1.616v-7.128c-3.052.553-5.189 1.503-7.154 2.379-2.714 1.209-5.057 2.254-10.05 2.254zM68.82 36.519c-4.993 0-7.338-1.045-10.05-2.255-3.006-1.338-6.413-2.854-12.89-2.854-6.474 0-9.882 1.516-12.887 2.854-2.712 1.21-5.058 2.255-10.051 2.255-4.996 0-7.339-1.045-10.054-2.255C9.883 32.925 6.476 31.41.001 31.41v6.968c4.996 0 7.339 1.043 10.054 2.253 3.005 1.338 6.41 2.857 12.887 2.857 6.475 0 9.882-1.52 12.887-2.857 2.715-1.21 5.058-2.253 10.051-2.253 4.996 0 7.34 1.043 10.054 2.253 3.006 1.338 6.413 2.857 12.887 2.857 6.478 0 9.882-1.52 12.887-2.857 2.716-1.21 5.059-2.253 10.054-2.253V31.41c-6.477 0-9.881 1.516-12.887 2.854-2.716 1.21-5.059 2.255-10.055 2.255M14.324 0H0v3.484c6.477 0 9.882-1.517 12.887-2.857.485-.215.959-.427 1.436-.627Z"></path>
      </pattern>
    </defs>
    <rect width="800%" height="800%" fill="url(#a)"></rect>
  </svg>
  )
}

export default BackgroundLight
