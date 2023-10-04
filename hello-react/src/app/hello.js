function Hello({ name = '', age = 0, isActive = false }) {
  return (
    <div className="Hello">
      Hello {name}
    </div>
  )
}

export default Hello;