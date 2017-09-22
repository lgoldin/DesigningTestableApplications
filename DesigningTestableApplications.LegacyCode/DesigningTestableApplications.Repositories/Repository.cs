﻿using System;
using DesigningTestableApplications.ORM;

namespace DesigningTestableApplications.Repositories
{
    public abstract class Repository
    {
        private static DummyContext context;

        public static DummyContext Context => context ?? (context = new DummyContext());

        public static void Dispose()
        {
            context = null;
        }
    }
}
