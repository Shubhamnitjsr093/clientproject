{/* Drawer Component (Open from right) */}
<Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
<DrawerContent className="right-0">
  <DrawerHeader className={'text-center'}>
    <DrawerTitle className="text-center">Menu</DrawerTitle>
    <DrawerDescription className="text-center">Explore our website</DrawerDescription>
  </DrawerHeader>



  <DrawerFooter className={" bg-primary-foreground font-semibold"}>
    <DrawerClose onClick={() => setDrawerOpen(false)}>Close</DrawerClose>
  </DrawerFooter>
</DrawerContent>
</Drawer>



<ul className="hidden xl:flex gap-4 items-center">
              {linksList.map((item, index) => (
                <li key={index} className="relative">
                  {item.childs ? (
                    <div className="group">
                      <Link to={item.link} className="text-white font-semibold p-2 inline-flex gap-1 items-center cursor-pointer">
                        {item.name}
                        <FaAngleDown
                          className={`transition-transform duration-300 rotate-0 text-primary group-hover:text-white group-hover:rotate-180`}
                        />
                      </Link>
                      <div className={`absolute top-full left-0 w-max p-2 bg-primary_dark border-0 shadow-lg rounded-md hidden group-hover:block`}>
                        {item.childs.map((child, childIndex) => (
                          <div key={childIndex} className="p-0">
                            <Link to={child.link} className="block w-full text-primary-foreground text-base font-semibold p-2 rounded-sm text-nowrap hover:bg-primary-foreground hover:text-dark">
                              {child.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    // <DropdownMenu
                    //   onOpenChange={(open) => setOpenDropdown(open ? index : null)} // Track dropdown open state
                    // >
                    //   <DropdownMenuTrigger asChild>
                    //     <span className="text-white p-2 inline-flex gap-1 items-center cursor-pointer">
                    //       {item.name}
                    //       <FaAngleDown
                    //         className={`transition-transform duration-300 ${openDropdown === index ? "rotate-180 text-white" : "rotate-0 text-primary"}`}
                    //       />
                    //     </span>
                    //   </DropdownMenuTrigger>
                    //   <DropdownMenuContent className="w-max bg-primary_dark border-0 shadow-lg rounded-md">
                    //     {item.childs.map((child, childIndex) => (
                    //       <DropdownMenuItem key={childIndex} className="p-0">
                    //         <Link to={child.link} className="block w-full text-primary-foreground text-base font-semibold p-2 rounded-sm text-nowrap hover:bg-primary-foreground hover:text-dark ">
                    //           {child.name}
                    //         </Link>
                    //       </DropdownMenuItem>
                    //     ))}
                    //   </DropdownMenuContent>
                    // </DropdownMenu>
                  ) : (
                    <Link to={item.link} className={`text-base font-semibold p-2 hover:text-gray-300 ${router.pathname === item.link ? "text-primary" : "text-white"}`}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/question" className="btn-primary !text-base hidden sm:inline-block">Start A Project</Link>