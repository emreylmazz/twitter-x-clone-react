import React from 'react'
import { Link } from 'react-router-dom'

const SidebarSection = ({title,children,more}) => {
  return (
    <section className='bg-[#16181c] overflow-hidden mb-4 rounded-2xl border border-[#16171c]'>
    <h5 className=' py-3 px-4 text-xl font-extrabold leading-6 h-12 flex items-center text-[#e7e9ea]'>İlgini çekebilecek gündemler
        </h5>
        <div className='grid'>
            {children}
        </div>
        {more && (
            <Link
            to={more}
            className="h-[52px] flex rounded-b-2xl items-center px-4 text-[15px] text-[color:var(--color-primary)] transition-colors hover:bg-[color:var(--background-third)]"
            >
                Daha fazla göster
                </Link>
        )}
        </section>
  )
}
SidebarSection.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
	more: false
}

export default SidebarSection