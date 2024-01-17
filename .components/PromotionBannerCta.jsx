import React from 'react'
import { Link } from 'react-router-dom';

export default function PromotionBannerCta(props) {
  return (
    <Link
      style={{
        fontWeight: '600',
        fontSize: '1rem',
        background: '#9ec8b9',
        border: 'none',
        padding: '12px 10px',
        color: '#000',
        borderRadius: '6px',
        cursor: 'pointer',
        marginTop: '12px'
      }}
      to={props.href}
    >
      {props.cta}
    </Link>
  )
}