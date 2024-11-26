                    
                    
                    
                    
                    KODY DODATKOWE NIE USUWAĆ BO ZAPIERDOLE KOPA
                    
                    
                    
                    
                    
                    <i class="fab fa-playstation"></i> <!-- Playstation -->
                    <i class="fab fa-xbox"></i>   <!-- Xbox -->
                    <i class="fab fa-windows"></i> <!-- Windows -->
                    <i class="fab fa-nintendo-switch"></i>  <!-- Nintendo Switch -->  
                    <i class="fab fa-steam"></i>}  <!-- Steam -->
                    /* Custom cursor base */
                    body {
                      cursor: url('assets/cursors/default-cursor.png'), auto;
                    }
                    
                    /* Specific clickable elements cursor */
                    nav a,
                    nav li,
                    .logo,
                    .cta-button,
                    .game-card,
                    .social-links a,
                    .social-icons a,
                    .footer-section a,
                    .submit-btn,
                    button {
                      cursor: url('assets/cursors/pointer-cursor.png'), pointer !important;
                    }
                    
                    /* Ensure cursor stays consistent on hover states */
                    nav a:hover,
                    .logo:hover,
                    .cta-button:hover,
                    .game-card:hover,
                    .social-links a:hover,
                    .social-icons a:hover,
                    .footer-section a:hover,
                    .submit-btn:hover,
                    button:hover {
                      cursor: url('assets/cursors/pointer-cursor.png'), pointer !important;
                    }  
                    
                    /* Form elements cursor styling */
                    input[type="text"],
                    input[type="email"],
                    select,
                    textarea {
                        cursor: url('assets/cursors/pointer-cursor.png'), text;
                    }
                    
                    .contact-form .submit-btn,
                    form button[type="submit"] {
                        cursor: url('assets/cursors/pointer-cursor.png'), pointer !important;
                    }
                    
                    /* When form elements are focused or active */
                    input[type="text"]:focus,
                    input[type="email"]:focus,
                    select:focus,
                    textarea:focus {
                        cursor: url('assets/cursors/text-cursor.png'), text;
                    }
                    